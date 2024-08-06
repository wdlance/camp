import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  base:"/",

  server: {
    cors: true, // 默认启用并允许任何源
   
    host: '0.0.0.0', // 局域网别人也可访问

    proxy: {// 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      '/api': {//顺丰云上传接口
        target: "http://www.taovel.com:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
     
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [vue()],
})
