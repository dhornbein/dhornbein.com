// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Drew Hornbein',
      meta: [
        { name: 'description', content: 'Facilitation, Art, and Technology' },
        { hid: 'og-type', property: 'og:type', content: 'Person' },
        { hid: 'og-title', property: 'og:title', content: 'Drew Hornbein' },
        { hid: 'og-desc', property: 'og:description', content: 'Facilitation, Art, and Technology' },
        { hid: 'og-image', property: 'og:image', content: 'https://dhornbein.com/og-default.jpg' },
        { hid: 'og-url', property: 'og:url', content: 'https://dhornbein.com/' },
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  }
})
