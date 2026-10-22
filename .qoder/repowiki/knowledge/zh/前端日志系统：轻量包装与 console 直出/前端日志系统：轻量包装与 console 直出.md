---
kind: logging_system
name: 前端日志系统：轻量包装与 console 直出
category: logging_system
scope:
    - '**'
source_files:
    - src/utils/log.ts
    - src/utils/axios.ts
    - src/router/index.ts
    - src/services/frame/application.ts
    - src/utils/storage.ts
---

## 1. 使用的方案

本项目没有引入第三方日志库（如 `log4js`、`winston`、`pino` 等），也没有统一的日志框架初始化。唯一的日志基础设施是 `src/utils/log.ts`，它基于浏览器原生 `console.warn` / `console.error` 做了极轻量的封装。

其余业务代码中直接散落着 `console.log` / `console.warn` / `console.error` 调用，未走统一出口。

## 2. 关键文件

- `src/utils/log.ts` — 唯一集中定义的日志工具模块
- `src/utils/axios.ts` — HTTP 拦截器中直接使用 `console.log` 打印错误信息
- `src/router/index.ts`、`src/services/frame/application.ts`、`src/utils/storage.ts` 等 — 多处直接 `console.log` 调试输出

## 3. 架构与约定

### 3.1 项目前缀
`log.ts` 通过 `import.meta.env.VITE_APP_TITLE` 读取环境变量中的应用标题，作为所有日志消息的前缀：

```
[${projectName} warn]:${message}
[${projectName} error]:${message}
```

这保证了来自不同子模块的日志在控制台可被快速区分。

### 3.2 暴露的 API
`log.ts` 仅导出两个函数：

| 函数 | 行为 |
|---|---|
| `warn(message: string)` | 调用 `console.warn`，附加 `[${projectName} warn]:` 前缀 |
| `error(message: string)` | **抛出** `new Error`，而非写入控制台；错误消息同样带 `[${projectName} error]:` 前缀 |

注意：没有 `info`、`debug`、`fatal` 等同级方法，也没有结构化字段（如 `level`、`module`、`traceId`）。

### 3.3 使用现状
搜索结果显示，项目中仅有极少数地方显式 import 了该模块（例如 `serviceTeam.ts` 的 import 行指向的是服务层而非 log 模块）。大部分日志仍通过裸 `console.log` 输出，包括：

- `src/router/index.ts:L4` — 路由表调试输出
- `src/services/frame/application.ts:L71, L104` — 接口响应与异常打印
- `src/utils/axios.ts:L44` — HTTP 错误提示
- `src/utils/storage.ts:L51, L159, L176-L178` — 存储变更订阅回调的调试语句

这些调用均不带项目前缀，也未形成统一格式。

## 4. 约定与约束

- **无前缀的日志来源不统一**：只有经过 `src/utils/log.ts` 的 `warn`/`error` 会带上 `[${VITE_APP_TITLE}]` 前缀；其他 `console.*` 调用无此约定。
- **错误处理策略**：`log.error` 不是“记录错误”，而是直接 `throw new Error(...)`，调用方需要自行 try/catch 或让上层捕获。
- **无日志级别管理**：不存在按环境（dev/prod）开关日志、过滤 debug 日志的配置逻辑。
- **无结构化字段**：日志消息仅为字符串拼接，没有对象形式的结构化字段（如 `{ level, module, traceId }`）。
- **无日志收集/上报**：未发现任何将日志发送到远端（如 Sentry、自研采集服务）的代码。
- **环境变量依赖**：日志前缀强依赖 `VITE_APP_TITLE`，若该变量缺失则前缀为 `[undefined]`。

## 5. 结论

这是一个非常初级的日志体系：一个仅两函数的工具模块 + 散落的 `console.*` 调用。尚未形成仓库级别的日志规范（如统一的 level 枚举、sink 配置、结构化字段约定），也没有构建期剔除 debug 日志的能力。当前状态更接近“开发期临时调试”而非生产可用的日志系统。