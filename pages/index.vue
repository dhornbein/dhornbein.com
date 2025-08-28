<template>
  <main>
    <base-nav />
    <section class="hero">
      <div>
        <small>Hello, I'm</small>
        <h1 class="text-3xl md:text-6xl">Drew Hornbein</h1>
        <p class="text-lg mt-4 max-w-prose w-[50vw] hidden md:block">{{ blurb }}</p>
      </div>
      <div class="quick-links flex flex-col gap-4 max-w-[440px]">
        <div v-for="(link, idx) in quickLinks" :key="idx" class="flex gap-2 flex-wrap">
          <a :href="link.href" class="btn grow">
            <BaseIcon :icon="link.icon" v-if="link.icon" /> {{ link.title }}
          </a>
          <nuxt-link v-if="link.twin" :to="link.twin.href" class="btn grow">
            <BaseIcon :icon="link.twin.icon" v-if="link.twin.icon" /> {{ link.twin.title }}
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="my-6 md:hidden">
      <p class="text-lg max-w-prose">{{ blurb }}</p>
    </section>
    <section class="flex flex-wrap items-center justify-center space-around border-b border-t border-slate-600 py-4 text-white">
      <a href="https://ritualpoint.studio/?utm_source=dhornbein.com" class="p-4">
        <img src="/rp-logo.png" alt="Ritual Point Logo" class="max-h-[200px] w-auto">
      </a>
      <a href="https://ritualpoint.studio/?utm_source=dhornbein.com" class="text-white">
        <h2 class="title text-3xl mb-4">Ritual Point Studio<br>Art &amp; Divination</h2>
        <p>Visit my artist persona where you can learn about my work with Tarot and Tattoos</p>
      </a>
    </section>
    <Portfolio />
  </main>
</template>

<script setup>

const blurb = "I'm an expert collaborator. I help individuals and teams work in ways that better align with their purpose and what the world needs. I use art to translate ideas into form. I am a wildly talented facilitator and host. I use ritual and divination to touch into intuitive coaching. I support change makers to make really real change."

const quickLinks = [
  {
    icon: 'calendar',
    title: 'Book a Meeting',
    href: 'https://cal.com/dhornbein',
    twin: {
      icon: 'calendar-month',
      title: 'See Calendar',
      href: '/calendar'
    }
  },
  {
    icon: 'mail',
    title: 'Email Me',
    href: 'mailto:hello@dhornbein.com',
    twin: {
      icon: 'phone',
      title: 'Call Me',
      href: 'tel:7732703739'
    }
  },
  {
    icon: 'file',
    title: 'Resume',
    href: '/resume'
  }
]
</script>

<style lang="scss">

.hero {
  @apply min-h-[80vh] -mx-4 p-4 flex flex-col justify-between border-b border-slate-600;
  background-image: url('/drew-profile.png');
  background-size: auto 100%;
  background-position: right 0;
  background-repeat: no-repeat;

  @media screen and (min-width: 767px) {
    background-image: url('/drew-blanket.png');
  }
}

</style>