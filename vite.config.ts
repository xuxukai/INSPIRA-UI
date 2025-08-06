import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 9999, // 设置开发服务器端口
    host: '0.0.0.0', // 允许外部访问
    allowedHosts: [
      '.ngrok-free.app', // 允许所有 ngrok-free.app 子域名
    ],
  },
})
