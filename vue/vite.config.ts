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
  },
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
});
