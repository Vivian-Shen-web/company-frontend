import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import topLevelAwait from 'vite-plugin-top-level-await'

const CWD = process.cwd()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`
    }),
    Pages({
      dirs: 'src/views',
      exclude: ['**/components/*.vue']
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [resolve(CWD, 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'svg-icon-[dir]-[name]'
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false // css in js
        })
      ]
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer(), tailwindcss()]
    },
    preprocessorOptions: {
      // less: {
      //   javascriptEnabled: true,
      //   modifyVars: {},
      //   additionalData: `
      //     @import '@/styles/variables.less';
      //   `,
      // },
      scss: {
        additionalData: `
        @use 'sass:math';
        @import "@/styles/variables.scss";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  envDir: './env',
  build: {
    rollupOptions: {
      output: {
        // manualChunks 配置
        manualChunks(id) {
          if (id.includes('/src/locales/lang')) {
            return 'lang'
          }
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://10.125.48.192:8082',
        // target: 'https://gateway-biz.platform.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
      // "/login": {
      //   // target: "http://localhost:9527",
      //   target: "https://itsm.iquicker.com/login/",
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/login/, ""),
      // },
    }
  }
})
