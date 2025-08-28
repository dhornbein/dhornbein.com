// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.scss',
  },
  app: {
    head: {
      title: 'Drew Hornbein',
      meta: [
        { name: 'description', content: 'Facilitation, Art, and Technology' },
        { property: 'og:type', content: 'Person' },
        { property: 'og:title', content: 'Drew Hornbein' },
        { property: 'og:description', content: 'Facilitation, Art, and Technology' },
        { property: 'og:image', content: 'https://dhornbein.com/og-default.jpg' },
        { property: 'og:url', content: 'https://dhornbein.com/' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  }
})
