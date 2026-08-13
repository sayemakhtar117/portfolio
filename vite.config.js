import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // relative asset paths — works at the domain root (Vercel/Netlify)
              // AND at a subpath like /your-repo-name/ (GitHub Pages) with no edits
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
