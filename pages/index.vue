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
    <section>
      <h2 class="text-2xl my-8">My ventures</h2>
      <div class="ventures">
        <a v-for="(venture, idx) in ventures" :key="idx" :href="venture.href" class="venture" :class="venture.class">
          <picture>
            <img :src="venture.img" class="w-24" />
          </picture>
          <h3 class="title">{{ venture.title }}</h3>
          <p>{{ venture.desc }}</p>
        </a>
      </div>
    </section>

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
    href: 'mailto:hello@dhornbein.com'
  },
  {
    icon: 'phone',
    title: 'Call Me',
    href: 'tel:7732703739'
  }
]

const ventures = [
  {
    img: '/hum-logo.png',
    class: 'border-[#f25da3] text-[#f25da3] hover:text-white',
    title: 'The Hum',
    desc: 'Helping teams become self-organized and developmental',
    href: 'https://thehum.org'
  },
  {
    img: '/rp-logo.png',
    class: 'border-white text-white',
    title: 'Ritual Point',
    desc: 'My art and divination practice',
    href: 'https://ritualpoint.studio/'
  },
  {
    img: '/sg-logo.png',
    class: 'border-[#f6a009] text-[#f6a009] hover:text-white',
    title: 'Shared Ground',
    desc: 'I was the former founder of a climate resiliency sanctuary in Denver',
    href: 'https://sharedground.co'
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

.ventures {
  @apply flex flex-col sm:flex-row gap-4;

  .venture {
    @apply border rounded-md p-4 flex flex-wrap gap-2 items-center md:w-1/3;

    .title {
      @apply text-2xl font-bold;
    }

    p {
      @apply w-full text-sm;
    }
  }
}</style>