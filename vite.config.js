import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
// BASE_PATH is set in GitHub Actions for Pages (e.g. '/awrim-website/'); default '/' for local dev
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
