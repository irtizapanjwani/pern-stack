import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  daisyui: {
    themes: ["pastel", "restro", "coffee", "forest", "cyber-punk", "synthwave", "luxury", "autumn", "valentine", "aqua", "business", "night", "dracula"], // 👈 add your themes here
  },
})
