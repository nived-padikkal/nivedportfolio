import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,        // expose to network (0.0.0.0)
    port: 5173,        // match your deploy platform port
    allowedHosts: "all" // allow your custom domain
  }
})
