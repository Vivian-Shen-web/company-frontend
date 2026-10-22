---
kind: frontend_style
name: 前端样式体系：SCSS + Tailwind + Ant Design Vue 主题定制
category: frontend_style
scope:
    - '**'
source_files:
    - src/styles/index.scss
    - src/styles/variables.scss
    - src/styles/theme.scss
    - src/styles/antdv.override.scss
    - src/styles/main.scss
    - src/styles/common.scss
    - src/styles/transition.scss
    - src/styles/style.css
    - src/styles/frames.scss
    - src/configs/theme.ts
    - tailwind.config.js
---

## 1. 使用的系统与工具

- **CSS 预处理器**：SCSS（通过 Vite 内置支持），所有全局样式集中在 `src/styles/`。
- **原子类框架**：Tailwind CSS，仅启用了 `utilities` 层（`@tailwind utilities`），base 与 components 层被注释掉；自定义扩展了 `gray`、`picker`、`hover` 三个颜色。
- **组件库**：Ant Design Vue（ant-design-vue），通过 `theme` API 注入算法（`defaultAlgorithm` / `darkAlgorithm`）实现亮色、暗色、暗黑模式三套主题。
- **图标系统**：自托管的 icomoon 字体（`src/assets/fonts/icomoon.*`），在 `src/styles/style.css` 中通过 `@font-face` 注册并映射到 `.icon-*` 类；同时项目内还使用 SVG 图标（`src/assets/icons/`）并通过 `components/basic/icon` 下的 `SvgIcon.vue` 渲染。
- **响应式策略**：未启用 Tailwind 的响应式断点配置；断点枚举定义在 `src/enums/breakpointEnum.ts`，但未见对应 Tailwind 扩展。布局切换（侧边菜单/顶部菜单）由 `src/configs/theme.ts` 中的 `layouts` 常量驱动。

## 2. 关键文件

- `src/styles/index.scss` — 全局样式入口，按顺序引入 theme/transition/common/antdv.override/frames/main/style.css，并输出 Tailwind utilities。
- `src/styles/variables.scss` — SCSS 变量集中地：`$header-height: 64px`、`$footer-height: 70px`、`$primary-color: #00b96b`、`$white`、`$black`。
- `src/styles/theme.scss` — 基于 `html.dark` 类切换 CSS 变量 `--component-background`，配合 Ant Design Vue 的主题算法。
- `src/styles/antdv.override.scss` — 覆盖 Ant Design Vue 默认样式（如 `z-index: 999999` 提升 message 层级）。
- `src/styles/main.scss` — 页面级基础样式：body 背景、`.not-too-long` 文本省略、`.page-lr-box-right` 左右布局、`.ant-page-header-heading::before` 左侧竖线装饰、表格头背景使用 `var(--color-primary-shallow)`。
- `src/styles/common.scss` — 全局滚动条美化（webkit 伪元素）。
- `src/styles/transition.scss` — 统一的过渡动画类：breadcrumb、fade、fade-transform、zoom-fade。
- `src/styles/style.css` — icomoon 字体注册与 icon 类映射。
- `src/configs/theme.ts` — 主题元数据：`themeStyle`（light/dark/realDark）、`themeColors`（拂晓蓝/薄暮/火山等 8 个品牌色）、`layouts`（sidemenu/topmenu）。
- `tailwind.config.js` — 仅 extend colors，无插件、无自定义断点。

## 3. 架构与约定

- **样式组织**：采用「入口聚合 + 分文件职责」结构。`index.scss` 是唯一的入口，按依赖顺序 import，避免循环引用；每个文件承担单一职责（变量、主题、覆盖、通用、布局、动画、字体）。
- **主题机制**：通过 Ant Design Vue 的 `theme` API 注入 `defaultAlgorithm` / `darkAlgorithm`，并在 HTML 根节点上以 `class="dark"` 切换深色模式；业务主色 `$primary-color: #00b96b` 通过 CSS 变量 `--color-primary` 暴露给组件样式。
- **Ant Design Vue 覆盖方式**：不直接修改 antd 源码，而是通过独立的 `antdv.override.scss` 用更具体的选择器覆盖默认样式（如 message z-index、image preview img display）。
- **Tailwind 使用范围**：仅在 `frames.scss` 中使用了 `@apply ml-auto me-0` 这类原子类；其余样式仍以 SCSS 编写，Tailwind 作为辅助工具而非主力。
- **设计令牌**：目前仅有少量 SCSS 变量（header/footer 高度、主色、黑白），没有完整的 design token 系统；颜色值多处硬编码（如 body 背景 `#f4f9fd`、滚动条 `#f8f8f8`）。