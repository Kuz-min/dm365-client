import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-vue';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),

      "@core": path.resolve(__dirname, "./src/core"),
      "@services": path.resolve(__dirname, "./src/core/services"),

      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },

  plugins: [
    plugin()
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/main.scss";`,
      },
    },
  },

  server: {
    port: 62554,
    proxy: {
      '/api': {
        target: 'http://localhost:5237',
        changeOrigin: true,
        secure: false,
      },
      '/imgs': {
        target: 'http://localhost:5237',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
