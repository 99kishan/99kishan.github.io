import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/99kishan/99kishan.github.io', // Ensures relative paths for GitHub Pages
  build: {
    outDir: 'dist', // Specify output directory if necessary
    rollupOptions: {
      input: './src/main.jsx', // Adjust to point to your main entry file if renamed
    }
  }
});