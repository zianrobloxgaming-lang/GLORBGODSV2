import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: process.env.FIGMA_DEV_SERVER_HOST || "0.0.0.0",
    port: parseInt(process.env.PORT || "8443"),
    strictPort: true,
    hmr: {
      clientPort: 443,
    },
    watch: {
      ignored: [,],
    },
  },
  preview: {
    host: process.env.FIGMA_DEV_SERVER_HOST || "0.0.0.0",
    port: parseInt(process.env.PORT || "8443"),
  },
})
