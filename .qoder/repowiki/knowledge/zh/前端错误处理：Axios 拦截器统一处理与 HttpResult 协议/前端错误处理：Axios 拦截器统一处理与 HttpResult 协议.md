---
kind: error_handling
name: 前端错误处理：Axios 拦截器统一处理与 HttpResult 协议
category: error_handling
scope:
    - '**'
source_files:
    - src/utils/axios.ts
    - types/global.d.ts
    - src/enums/httpEnum.ts
    - src/views/[...all].vue
    - src/router/index.ts
    - src/utils/log.ts
---

## 1. 采用的方案

本项目是一个基于 Vite + Vue3 + TypeScript 的前端工程，没有引入专门的错误处理框架（如 Sentry、Sentry SDK 等）。错误处理集中在以下位置：

- **HTTP 层**：`src/utils/axios.ts` 中自定义 `Http` 类，基于 axios 的 response interceptor 统一处理后端返回码和 HTTP 异常。
- **全局类型**：`types/global.d.ts` 定义 `HttpResult<T>` 作为所有 API 响应的统一契约。
- **路由层**：`src/router/index.ts` 仅做 `beforeEach` 标题设置，未实现全局路由错误守卫；404 通过 `src/views/[...all].vue` 兜底页面展示。
- **工具层**：`src/utils/log.ts` 提供一个 `error()` 函数，直接 `throw new Error(...)`，用于在开发期快速暴露问题。

## 2. 关键文件

- `src/utils/axios.ts` — 核心错误处理入口，封装 axios 并集中处理业务错误码与网络异常。
- `types/global.d.ts` — 定义 `HttpResult<T>`、`PageList<T>` 等全局类型，约定后端响应结构。
- `src/enums/httpEnum.ts` — 定义 `RequestEnum`、`ContentTypeEnum`，但当前未被 axios 层使用来区分错误场景。
- `src/views/[...all].vue` — 404 兜底页面，内容为静态文本 `404 error`。
- `src/router/index.ts` — 路由初始化，无全局错误/权限守卫。
- `src/utils/log.ts` — 提供 `error(message)` 抛错工具。

## 3. 架构与约定

### 3.1 后端响应协议 `HttpResult<T>`

`types/global.d.ts` 声明：

```ts
interface HttpResult<T>{
  msg:string,
  code:number,
  data:T,
  success:boolean
}
```

项目约定所有后端接口返回一个包含 `code`、`msg`、`data`、`success` 的对象。调用方（如 `src/services/user/user.ts`）通过 `http.get<HttpResult<User>>(...)` 等方式消费该类型。

### 3.2 Axios 拦截器的错误分类策略

`src/utils/axios.ts` 的 `Http` 类在构造时注册了 `interceptors.response.use`，按以下顺序处理：

1. **成功分支**：若 `response.config.responseType === 'blob'`，直接透传原始 response（用于下载）；否则检查 `response.data.code !== 200`。
2. **业务错误码非 200**：打印 `console.log('接口信息报错', res.msg)`，调用 `message.error({ content: res.msg })` 弹出 Ant Design Vue 提示，然后 `Promise.reject(new Error(res.msg || 'Error'))`。
3. **网络/HTTP 异常**：
   - 无 `error.response`（如网络断开、超时）：显示 `message.error('请求失败！')`。
   - `error.response.status == 403`：显示 `error.response?.data?.msg || '没有权限'`。
   - 其他状态码：显示 `error.response?.data?.msg || '系统错误'`。
   - 最终一律 `return Promise.reject(error)`，将错误继续向调用链传播。

### 3.3 防重复提交与错误传播

`Http` 类对 `POST` / `PUT` 方法做了简易防重：通过 `preventRepeat` 字典记录 URL 时间戳，若在 `timeout`（5s）内重复调用，则 `repeatReturn<T>()` 返回一个已 reject 的 Promise，内容为字符串 `'重复调用'`，同时弹出 `message.warning('操作过快，请不要重复操作')`。

### 3.4 下载接口的错误处理

`download(url, params)` 单独 `.catch((error: any) => message.error('下载失败:', error))`，不向上抛出，属于吞掉错误的局部处理。

### 3.5 路由与 404

路由配置 `src/router/index.ts` 没有 `router.onError` 或 `next('/404')` 逻辑；404 由 `src/views/[...all].vue` 作为动态路由兜底组件渲染，模板仅输出 `<div>404 error</div>`，不做任何跳转或日志记录。

### 3.6 工具级抛错

`src/utils/log.ts` 中的 `error(message)` 直接 `throw new Error(`[${projectName} error]:${message}`)`，属于开发期断言式错误，不是运行时业务错误通道。

## 4. 观察到的约定与约束

- **后端成功标志是 `code === 200`**：这是 `axios.ts` 中硬编码的判断条件（`if (res.code !== 200)`），并非枚举常量。
- **业务错误通过 `message.error` 弹窗通知用户**：所有业务码非 200 和网络异常都会调用 ant-design-vue 的 `message.error`，错误文案优先取 `res.msg` / `error.response.data.msg`，回退到中文默认文案（`'请求失败！'`、`'没有权限'`、`'系统错误'`）。
- **HTTP 异常一律向调用方 reject**：拦截器最后 `return Promise.reject(error)`，调用方需要自行 `.catch` 处理；部分调用处（如 `download`）选择吞掉错误。
- **403 被特殊对待**：只有 403 有独立分支显示“没有权限”，其他非 2xx 状态码走通用“系统错误”分支。
- **无全局错误边界**：Vue 应用入口 `src/main.ts` 未挂载 `app.config.errorHandler`，也没有全局 try/catch 包裹根组件，因此未捕获的 JS 错误不会统一上报或降级。
- **无统一的错误码枚举**：虽然 `src/enums/httpEnum.ts` 存在，但它只定义了 `RequestEnum` 和 `ContentTypeEnum`，并未定义业务错误码；`code === 200` 是魔法数字。
- **类型层面强制 `HttpResult` 结构**：服务层通过泛型 `HttpResult<T>` 约束返回值，但拦截器内部直接访问 `response.data.code` / `response.data.msg`，未做运行时校验。
- **防重复提交以 URL 为键**：`preventRepeat` 用 URL 字符串作为 key，且 `isRepeat` 与 `clearRepeat` 共用同一对象，存在并发竞态风险（无锁）。

## 5. 总结

该项目的错误处理是“中心化拦截器 + 类型契约”模式：`HttpResult<T>` 定义后端响应格式，`Http` 类的 axios interceptor 负责把业务错误码和用户可见的错误消息统一收敛到 Ant Design 的 message 提示框，并将异常继续向上抛出供业务代码 catch。除此之外，没有全局错误边界、错误上报、错误码枚举或可恢复的错误类型体系。