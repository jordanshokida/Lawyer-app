import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'logo.png'],
  strategies: 'generateSW',
  manifest: {
    name: 'Lawyer App',
    short_name: 'LawyerApp',
    description: 'App de turnos y contacto para abogado',
    theme_color: '#800000', // Bordó
    background_color: '#ffffff',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    icons: [
      {
        src: 'logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  },
  devOptions: {
    enabled: true
  },
  workbox: {
    // Evitar que el service worker sirva de fallback (navegación) estas rutas (dinámicas con datos)
    navigateFallback: 'index.html',
    navigateFallbackDenylist: [
      /^\/turno/,
      /^\/signin/,
      /^\/signup/,
      /^\/profile/,
      /^\/signout/
    ]
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA(manifestForPlugin)],
  server: {
    host: true
  },
  build: {
    sourcemap: true
  }
})

