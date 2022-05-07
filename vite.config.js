import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server:{
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      '/api': 'https://8000-clownlee-web3-qruu8x6b5w2.ws-us44.gitpod.io/api'
    }
  }
})
