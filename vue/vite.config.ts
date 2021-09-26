import { defineConfig } from "vite";
import { join } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    watch: { usePolling: true },
    proxy: {
      "^/api/.*": {
        target: "http://hasura:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "^/files/.*": {
        target: "http://express:8000",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
  },
});
