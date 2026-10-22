import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'src/views/index',
      exclude: ['**/components/*.vue', '**/data/*.ts']
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
    }
  }
})
