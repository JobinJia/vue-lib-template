import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import unoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'iife'],
      name: 'UiLib',
      fileName(format) {
        switch (format) {
          case 'es':
            return 'index.mjs'
          case 'cjs':
            return 'index.cjs'
          case 'iife':
            return 'index.js'
          default:
            return 'index.js'
        }
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          Vue: 'vue',
        },
        exports: 'named',
        banner: `
/**
 *  Copyright ${new Date(Date.now()).getFullYear()} Jobin Jia
 *  @license MIT
**/
`,
      },
    },
  },
  plugins: [vue(), dts(), unoCSS()],
})
