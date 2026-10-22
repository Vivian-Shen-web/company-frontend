---
kind: configuration_system
name: Vite 环境变量与运行时配置体系
category: configuration_system
scope:
    - '**'
source_files:
    - vite.config.ts
    - env/.env
    - env/.env.dev
    - env/.env.prod
    - package.json
    - src/utils/axios.ts
    - src/router/index.ts
    - src/components/basic/icon/src/icon-font.tsx
    - src/utils/common.ts
    - src/utils/log.ts
    - src/configs/application.ts
---

## 1. 使用的系统与工具

- 构建工具：**Vite 5**，通过 `vite.config.ts` 集中管理构建期配置。
- 环境变量加载：使用 Vite 内置的 `import.meta.env`（Vite 5 原生支持），无需额外库。
- 环境文件目录：通过 `envDir: './env'` 将默认 `.env*` 从项目根目录迁移到 `env/` 子目录。
- 多环境模式：通过 `--mode` 参数区分 dev/prod，对应 `env/.env.dev`、`env/.env.prod` 以及基础 `env/.env`。
- 应用内常量：`src/configs/application.ts` 提供纯 JS 常量（如 `ApplicationConfig.code = 'xiehe'`）。
- 路由 base：通过 `import.meta.env.BASE_URL` 控制 `createWebHistory` 的基础路径。
- 图标资源：通过 `import.meta.env.BASE_URL` 拼接 iconfont 脚本地址。

## 2. 关键文件

- `vite.config.ts`：Vite 主配置，声明 `envDir`、`server.proxy`、`build.rollupOptions.output.manualChunks`、CSS preprocessor 等。
- `env/.env`：公共环境变量基线。
- `env/.env.dev`：开发环境覆盖变量。
- `env/.env.prod`：生产环境覆盖变量。
- `package.json`：scripts 中定义 `dev`、`build-only`（`--mode prod`）、`preview` 等入口。
- `src/utils/axios.ts`：在构造器中读取 `import.meta.env.VITE_SERVER_PATH` 作为 axios baseURL。
- `src/router/index.ts`：使用 `import.meta.env.BASE_URL` 初始化路由 history。
- `src/components/basic/icon/src/icon-font.tsx`：使用 `import.meta.env.BASE_URL` 动态加载 iconfont 脚本。
- `src/utils/common.ts`：导出 `IS_PROD = import.meta.env.PROD`、`IS_DEV = import.meta.env.DEV`。
- `src/utils/log.ts`：读取 `import.meta.env.VITE_APP_TITLE` 作为项目名称。
- `src/configs/application.ts`：纯 TS 常量模块，导出 `ApplicationConfig`。

## 3. 架构与约定

### 3.1 环境变量分层

- **基础层** `env/.env`：存放所有环境共享的变量，当前包含 `VITE_SERVER_PATH=/api`、`VITE_HOMEPAGE=/`。
- **环境覆盖层** `env/.env.dev` / `env/.env.prod`：分别覆盖 `VITE_SERVER_PATH` 为本地代理 `/api` 或生产路径 `/api/biz`，`VITE_HOMEPAGE` 保持 `/`。
- 变量命名规范：全部以 `VITE_` 前缀开头，这是 Vite 暴露给客户端代码的唯一方式（只有 `VITE_*` 变量会被注入到 `import.meta.env`）。
- 非 `VITE_` 前缀的环境变量不会出现在浏览器端。

### 3.2 构建期 vs 运行期

- 构建期：`vite.config.ts` 中的 `server.proxy` 仅在 `vite dev` 时生效，将 `/api` 转发到 `http://10.125.48.192:8082`，并通过 `rewrite` 去掉前缀。
- 运行期：`src/utils/axios.ts` 在构造函数中读取 `import.meta.env.VITE_SERVER_PATH` 并设置 axios 的 `baseURL`；若未定义则回退到 `/api/`。
- 路由历史模式：`src/router/index.ts` 使用 `createWebHistory(import.meta.env.BASE_URL)`，由 Vite 根据 `base` 选项注入。

### 3.3 模式（mode）与脚本

- `package.json` 的 `scripts.build-only` 固定使用 `--mode prod`，因此生产构建走 `env/.env.prod`。
- `scripts.dev` 直接调用 `vite`，默认 mode 为 `development`，匹配 `env/.env.dev`。
- `scripts.preview` 使用 `vite preview`，用于预览已构建产物。

### 3.4 应用级常量

- `src/configs/application.ts` 是独立的纯 TS 模块，导出 `ApplicationConfig`（含 `code`、`name`），不依赖任何运行时 API，适合在组件和 store 中直接 import。

### 3.5 其他运行时开关

- `src/utils/common.ts` 导出 `IS_PROD`、`IS_DEV`，基于 `import.meta.env.PROD` / `import.meta.env.DEV`，供业务逻辑做环境判断。
- `src/utils/log.ts` 通过 `import.meta.env.VITE_APP_TITLE` 获取项目名称（该变量未在 env 文件中定义，属于缺失项）。

## 4. 约定与约束

- **环境变量必须以 `VITE_` 前缀命名**：这是 Vite 框架层面的强制规则，只有 `VITE_*` 变量才会被注入到客户端的 `import.meta.env` 对象中。这一约束由 Vite 源码保证，而非本项目自行实现。
- **环境变量文件必须放在 `env/` 目录下**：`vite.config.ts` 显式设置了 `envDir: './env'`，因此根目录下的 `.env*` 不会被 Vite 自动加载。
- **服务端 API 地址统一通过 `VITE_SERVER_PATH` 注入**：`src/utils/axios.ts` 是唯一消费该变量的地方，并在未定义时回退到 `/api/`。
- **路由 base 统一通过 `BASE_URL` 注入**：`src/router/index.ts` 使用 `import.meta.env.BASE_URL` 初始化路由 history，确保 SPA 部署在非根路径下也能正常工作。
- **构建产物中语言包独立分包**：`vite.config.ts` 中 `manualChunks` 将 `src/locales/lang` 下的文件单独打包为 `lang` chunk，便于按语言懒加载。
- **开发代理仅对 `/api` 生效**：`vite.config.ts` 的 `server.proxy` 只配置了 `/api` 到 `http://10.125.48.192:8082` 的转发，且 rewrite 会去掉 `/api` 前缀。
- **生产构建固定使用 `prod` 模式**：`package.json` 的 `build-only` 脚本硬编码 `--mode prod`，因此生产构建始终读取 `env/.env.prod`。
- **iconfont 脚本路径基于 `BASE_URL`**：`src/components/basic/icon/src/icon-font.tsx` 使用 `${import.meta.env.BASE_URL}iconfont.js` 拼接脚本地址，要求部署时该文件位于应用 base 路径下。

## 5. 观察到的缺口

- `src/utils/log.ts` 引用了 `VITE_APP_TITLE`，但 `env/.env`、`env/.env.dev`、`env/.env.prod` 中均未定义该变量，运行时可能得到 `undefined`。
- 没有发现 secrets 管理方案（如 .env 文件未纳入版本控制，但仓库中存在示例 env 文件），也没有 feature flag 系统——配置集中在静态文件和 Vite 环境变量中。