import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //api configuration setup
  server:{
    proxy:{
      '/api':{
        target: "http://127.0.0.1:8001",
        changeOrigin:true,
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        }

      }
    }
  }
})