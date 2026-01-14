import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: {
    hmr: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
})
