import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    // Relative to the root
    outDir: "../dist",
  },
  server: {
    port: 3000,
    host: "localhost",
  },
});
