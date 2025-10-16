// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // On importe le module 'path' de Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // C'est cette section qui va résoudre notre problème
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})