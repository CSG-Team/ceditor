import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],

  resolve: {
    alias: {
      '@constant': path.resolve(__dirname, 'src/constant'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@type': path.resolve(__dirname, 'src/type'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@image': path.resolve(__dirname, 'src/image'),
    },
  },
  build: {
    sourcemap: true,
  },
  css: {
    modules: {
      generateScopedName: '[local]___[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
})
