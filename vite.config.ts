import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
     '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
   
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        quietDeps: true,
        additionalData: `@use "@/assets/styles/variables" as *; @use "@/assets/styles/mixins" as *;`
      }
    }
  }
})

