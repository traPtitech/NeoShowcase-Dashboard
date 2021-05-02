import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
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
