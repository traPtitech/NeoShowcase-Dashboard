import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

const srcPath = path.resolve(__dirname, 'src').replace(/\\/g, '/')

export default defineConfig({
  resolve: {
    alias: {
      '/@': srcPath
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${srcPath}/styles/_element-plus-theme.scss";`
      }
    }
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://example.com',
  //       changeOrigin: true
  //     }
  //   }
  // }
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${name}.scss`
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`
          }
        }
      ]
    })
  ]
})
