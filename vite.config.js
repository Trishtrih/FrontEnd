import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  plugins: [eslint()]
});