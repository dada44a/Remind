// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    // Add your CSS file path here
    '/assets/css/main.css'  // This assumes your CSS file is in the assets/css directory
  ]
})