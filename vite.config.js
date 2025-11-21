import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['.netlify.app']
  },
  preview: {
    host: true,
    allowedHosts: ['.netlify.app']
  }
})
