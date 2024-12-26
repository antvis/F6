import { defineConfig } from "vite";

export default defineConfig({
  root: "packages/engine",
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.js",
      name: "engine",
      fileName: (format) => `engine.${format}.js`,
    },
    rollupOptions: {
      input: "./src/main.js",
    },
  },
  server: {
    open: "./examples/index.html",
  },
});
