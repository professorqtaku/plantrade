import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "*": "ws://localhost:9092",
      "/api": "http://localhost:4000",
      "/rest": "http://localhost:4000",
      "/login": "http://localhost:4000",
      "/logout": "http://localhost:4000",
    },
  },
});
