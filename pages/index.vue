<template>
  <main>
    <base-nav />
    <section class="hero">
      <div>
        <small>Hello, I'm</small>
        <h1 class="text-3xl md:text-6xl">Drew Hornbein</h1>
        <p class="text-lg mt-4 max-w-prose w-[50vw] hidden md:block">{{ blurb }}</p>
      </div>
      <div class="quick-links grid grid-cols-2 gap-4 max-w-[440px]">
        <template v-for="(btn, idx) in buttons" :key="idx">
          <nuxt-link
            v-if="btn.isNuxt"
            :to="btn.href"
            class="btn"
            :class="btn.btnClass"
          >
            <Icon :name="btn.icon" size="1.5em" v-if="btn.icon" /> {{ btn.title }}
          </nuxt-link>
          <a
            v-else
            :href="btn.href"
            class="btn"
            :class="btn.btnClass"
          >
            <Icon :name="btn.icon" size="1.5em" v-if="btn.icon" /> {{ btn.title }}
          </a>
        </template>
      </div>
    </section>
    <section class="my-6 md:hidden">
      <p class="text-lg max-w-prose">{{ blurb }}</p>
    </section>
    <section class="flex flex-wrap items-center justify-center space-around border-b border-t border-slate-600 py-4 text-white">
      <a href="https://ritualpoint.studio/?utm_source=dhornbein.com" class="p-4">
        <img src="/rp-logo.png" alt="Ritual Point Logo" class="max-h-[200px] w-auto">
      </a>
      <a href="https://ritualpoint.studio/?utm_source=dhornbein.com" class="text-white text-center md:text-left">
        <h2 class="title text-3xl mb-4">Ritual Point Studio<br>Art &amp; Divination</h2>
        <p>Visit my artist persona where you can learn about my work with Tarot and Tattoos</p>
      </a>
    </section>
    <Portfolio />
  </main>
</template>

<script setup>

const blurb = "I'm an expert collaborator who helps individuals and teams work in ways that better align with their purpose and what the world needs. I use art, divination, and facilitation to support change makers in their efforts to make real and lasting change."

const buttons = [
  {
    icon: 'heroicons:calendar',
    title: 'Book a Meeting',
    href: 'https://cal.com/dhornbein',
    isNuxt: false,
    btnClass: 'btn-gold'
  },
  {
    icon: 'heroicons:calendar-days',
    title: 'See Calendar',
    href: '/calendar',
    isNuxt: true,
  },
  {
    icon: 'heroicons:envelope',
    title: 'Email Me',
    href: 'mailto:hello@dhornbein.com',
    isNuxt: false,
  },
  {
    icon: 'heroicons:phone',
    title: 'Call Me',
    href: 'tel:7732703739',
    isNuxt: false,
  },
  {
    icon: 'heroicons:document-text',
    title: 'Resume',
    href: '/resume',
    isNuxt: true,
  },
  {
    icon: 'heroicons:user-group-solid',
    title: 'Facilitation',
    href: '/facilitation',
    isNuxt: true,
  },
];
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