<template>
   <nav class="main-nav">
      <div class="flex gap-2 items-center">
        <div v-if="route.name != 'index'" class="border-r pr-4 mr-2 border-pink-500">
          <nuxt-link to="/"><Icon name="heroicons:home" /> <span class="hidden sm:inline">Go Home</span></nuxt-link>
        </div>
        <a v-for="(link, idx) in social" :key="idx" :href="link.href" target="_blank">
          <Icon :name="link.icon" v-if="link.icon" />
        </a>
      </div>
      <div class="flex gap-4 item-center">
        <a href="mailto:hello@dhornbein.com"><Icon name="heroicons:envelope-solid" /> <span class="hidden sm:inline">hello@dhornbein.com</span></a>
        <a href="tel:+17732703739"><Icon name="heroicons:phone-solid" /> <span class="hidden sm:inline">+1 (773) 270-3739</span></a>
      </div>
    </nav> 
</template>

<script setup>
const route = useRoute();
const social = [
  {
    href: 'https://twitter.com/dhornbein',
    icon: 'cib:twitter',
    title: 'Twitter'
  },
  {
    href: 'https://instagram.com/dhornbein',
    icon: 'cib:instagram',
    title: 'Instagram'
  },
  // {
  //   href: 'https://facebook.com/dhornbein',
  //   icon: 'cib:facebook',
  //   title: 'Facebook'
  // },
  {
    href: 'https://www.linkedin.com/in/dddrew/',
    icon: 'cib:linkedin',
    title: 'LinkedIn'
  },
  // {
  //   href: 'https://www.discordapp.com/users/DHorn#1231',
  //   icon: 'cib:discord',
  //   title: 'Discord'
  // },
  {
    href: 'https://youtube.com/@dhornbein',
    icon: 'cib:youtube',
    title: 'YouTube'
  },
  {
    href: 'https://dddrew.com',
    icon: 'cib:wordpress',
    title: 'My Blog'
  },

]
</script>

<style lang="scss">

nav {
  @apply flex gap-4 justify-between items-center pb-2 border-b border-slate-600;

  a {
    @apply border-none inline-flex items-center gap-2;
  }
}

</style>