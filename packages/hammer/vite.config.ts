import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"), // 入口文件
      name: "f6-hammer", // UMD 构建时的全局变量名
      fileName: (format) => `index.${format}.js`, // 输出文件名
    },
    sourcemap: true,
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
          name: "f6-hammer",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      ],
    },
  },
});
