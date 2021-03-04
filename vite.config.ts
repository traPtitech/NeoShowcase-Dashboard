import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-expect-error skip installing @types/webpack
import path from 'path'

declare const __dirname: string

const config = defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src')
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
  plugins: [vue()]
})

export default config
