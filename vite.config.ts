import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      { find: '@common', replacement: fileURLToPath(new URL('./src/common', import.meta.url)) },
      { find: '@types', replacement: fileURLToPath(new URL('./src/types', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
    ],
  },
})
