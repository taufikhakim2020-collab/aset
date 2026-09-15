import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'asetpro', // Points Vite to look inside the asetpro folder
  build: {
    outDir: '../dist', // Builds the production files into the root dist folder
    emptyOutDir: true
  }
})
