import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/my-portfolio/" : "/";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: basePath,
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  assetsInclude: ["**/*.pdf"],
  publicDir: "public",
});
