import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // <- ini yang penting
  plugins: [react()],
})
