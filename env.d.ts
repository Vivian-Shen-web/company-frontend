/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

//打包配置参数类型定义，在env中进行配置
interface ImportMetaEnv {
    readonly VITE_SERVER_PATH: string
    readonly VITE_HOMEPAGE: string
}
