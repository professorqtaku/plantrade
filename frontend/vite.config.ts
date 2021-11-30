import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "*": "ws://localhost:9092",
      "/api": "/api",
      "/rest": "/rest",
      "/login": "/login",
      "/logout": "/logout",
      "/uploads": "/uploads",
    },
  },
});
