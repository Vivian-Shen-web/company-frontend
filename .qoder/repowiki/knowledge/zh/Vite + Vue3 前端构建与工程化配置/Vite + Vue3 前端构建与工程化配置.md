---
kind: build_system
name: Vite + Vue3 前端构建与工程化配置
category: build_system
scope:
    - '**'
source_files:
    - package.json
    - vite.config.ts
    - vitest.config.ts
    - .husky/pre-commit
    - .husky/commit-msg
    - scripts/verifyCommit.js
    - env/.env
    - env/.env.dev
    - env/.env.prod
    - tsconfig.app.json
    - tsconfig.node.json
    - tsconfig.vitest.json
    - tailwind.config.js
---

## 1. 构建系统概览

本项目采用 **Vite 5** 作为核心构建工具，搭配 **Vue 3 + TypeScript** 单页应用。所有构建、开发、测试、代码检查脚本均通过 `package.json` 的 `scripts` 字段暴露，无 Makefile / Dockerfile / CI 配置文件。

关键依赖：
- `vite` ^5.0.11（构建 & 开发服务器）
- `@vitejs/plugin-vue` ^5.0.3（Vue SFC 支持）
- `vitest` ^1.2.2（单元测试）
- `eslint` ^8.49 + `prettier` ^3.0 + `husky` ^9.0 + `lint-staged` ^15.2（代码质量与 Git Hook）
- `tailwindcss` ^3.4 + `sass` ^1.71（样式处理）
- `unplugin-vue-components` + `vite-plugin-pages` + `vite-plugin-svg-icons`（组件自动注册、文件系统路由、SVG 图标）

## 2. 关键文件

- `package.json` — 脚本入口、依赖声明、`lint-staged` 钩子映射
- `vite.config.ts` — Vite 主配置（插件、别名、CSS 预处理器、分包策略、开发代理）
- `vitest.config.ts` — 测试配置，继承 vite 配置并设置 jsdom 环境
- `.husky/pre-commit` — 提交前执行 `lint-staged`
- `.husky/commit-msg` — 调用 `scripts/verifyCommit.js` 校验 commit message
- `scripts/verifyCommit.js` — 基于正则强制 Conventional Commits 格式
- `env/.env` / `env/.env.dev` / `env/.env.prod` — Vite 环境变量（`VITE_SERVER_PATH`、`VITE_HOMEPAGE`），由 `vite.config.ts` 中 `envDir: './env'` 指定加载路径
- `tsconfig.app.json` / `tsconfig.node.json` / `tsconfig.vitest.json` — 分场景 TS 编译配置
- `tailwind.config.js` — Tailwind CSS 配置

## 3. 架构与约定

### 构建脚本（npm scripts）
- `dev` → `vite`：启动开发服务器
- `build` → `run-p type-check "build-only {@}" --`：并行执行类型检查与构建
- `build-only` → `vite build --mode prod`：生产构建，使用 `env/.env.prod`
- `preview` → `vite preview`：预览构建产物
- `test:unit` → `vitest`：运行单元测试
- `type-check` → `vue-tsc --build --force`：严格类型检查
- `lint` → `eslint . --ext ... --fix`：ESLint 全量扫描并修复
- `format` → `prettier --write src/`：格式化源码
- `prepare` → `husky install`：安装 Git Hooks

### Vite 构建配置要点
- `plugins`：启用 `topLevelAwait`（导出名为 `__tla`）、`Pages({ dirs: 'src/views', exclude: ['**/components/*.vue'] })` 文件系统路由、`createSvgIconsPlugin`（iconDirs 指向 `src/assets/icons`，symbolId 格式为 `svg-icon-[dir]-[name]`）、`Components` 配合 `AntDesignVueResolver`（`importStyle: false`）实现 Ant Design Vue 按需引入。
- `css.postcss`：串联 `autoprefixer()` 与 `tailwindcss()`；`scss.additionalData` 全局注入 `@use 'sass:math'` 和 `@import "@/styles/variables.scss"`。
- `resolve.alias`：`@` 指向 `./src`。
- `envDir: './env'`：环境变量目录。
- `build.rollupOptions.output.manualChunks`：将 `src/locales/lang` 下的语言包单独拆分为 `lang` chunk。
- `server.proxy`：`/api` 代理到 `http://10.125.48.192:8082`，`rewrite` 去掉 `/api` 前缀。

### 测试
- `vitest.config.ts` 通过 `mergeConfig(viteConfig, ...)` 复用 Vite 配置，测试环境为 `jsdom`，排除 `e2e/*`。

### Git Hook 与提交规范
- `husky` 在 `prepare` 阶段安装。
- `pre-commit` 钩子执行 `npx lint-staged`，仅对 `src/**/*.{js,ts,vue}` 运行 `prettier --write`。
- `commit-msg` 钩子执行 `scripts/verifyCommit.js`，强制 commit message 匹配正则：
  ```
  /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}$/
  ```
  或版本号提交 `^v\d`（用于自动化 changelog）。不匹配则 `process.exit(1)` 阻止提交。

### 环境变量
- 基础变量：`env/.env`（`VITE_SERVER_PATH=/api`, `VITE_HOMEPAGE=/`）
- 开发变量：`env/.env.dev`（`VITE_SERVER_PATH=http://localhost:5173/api`）
- 生产变量：`env/.env.prod`（`VITE_SERVER_PATH=/api/biz`）
- 通过 `--mode prod` 选择对应环境。

## 4. 约定与约束

- **构建命令统一通过 npm scripts 调用**，禁止直接调用 `vite` / `vitest` / `eslint` 等二进制（见 `package.json` scripts 定义）。
- **TypeScript 严格模式**：`build` 脚本先跑 `vue-tsc --build --force`，类型错误会阻断构建。
- **Conventional Commits 强制校验**：`.husky/commit-msg` 调用的 `scripts/verifyCommit.js` 以 `process.exit(1)` 拒绝不符合格式的提交，允许的 scope 包括 `feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps`，消息长度限制 50 字符。
- **提交前自动格式化**：`.husky/pre-commit` 通过 `lint-staged` 仅对暂存区的 JS/TS/Vue 文件执行 `prettier --write`。
- **环境变量按 mode 隔离**：`vite.config.ts` 中 `envDir: './env'` 配合 `--mode prod` 决定加载哪个 `.env.*` 文件。
- **页面路由基于文件系统**：`vite-plugin-pages` 将 `src/views` 下除 `components/*.vue` 外的 `.vue` 文件自动映射为路由。
- **组件按需引入**：通过 `unplugin-vue-components` + `AntDesignVueResolver` 自动解析 Ant Design Vue 组件，样式通过 CSS-in-JS 方式引入（`importStyle: false`）。
- **无 Docker / CI / Makefile**：仓库未包含容器化或持续集成配置，发布流程未在代码中体现。