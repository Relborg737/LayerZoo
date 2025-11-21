import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: ['devserver-preview--layerzoo.netlify.app']
  },
  preview: {
    allowedHosts: ['devserver-preview--layerzoo.netlify.app']
  }
})
