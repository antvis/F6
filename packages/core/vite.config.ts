import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // 入口文件
      name: "f6-core", // UMD 构建时的全局变量名
      fileName: (format) => `index.${format}.js`, // 输出文件名
    },
    rollupOptions: {
      // 确保 external 包不会被打包到库中
      external: ["react", "react-dom"],
      output: [
        {
          // CommonJS
          format: "cjs",
          dir: "dist/cjs",
        },
        {
          // ESM
          format: "es",
          dir: "dist/esm",
        },
        {
          // UMD
          format: "umd",
          dir: "dist/umd",
          name: "f6-core",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      ],
    },
  },
});
