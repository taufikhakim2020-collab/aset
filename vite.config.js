import { defineConfig } from 'vite'

export default defineConfig({
  root: 'asetpro', // Tells Vite to look inside asetpro for index.html
  build: {
    outDir: '../dist', // Places the built files back into a dist folder in the root
  }
})
