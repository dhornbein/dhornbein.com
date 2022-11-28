<template>
  <main>
    <nav>
      <div class="flex gap-2 items-center">
        <a v-for="(link, idx) in social" :key="idx" :href="link.href" target="_blank">
          <BaseIcon :icon="link.icon" v-if="link.icon" />
        </a>
      </div>
      <div class="flex gap-4 item-center">
        <a href="mailto:hello@dhornbein.com"><BaseIcon icon="mail" /> <span class="hidden sm:inline">hello@dhornbein.com</span></a>
        <a href="tel:+17732703739"><BaseIcon icon="phone" /> <span class="hidden sm:inline">+1 (773) 270-3739</span></a>
      </div>
    </nav>
    <section class="hero">
      <div>
        <small>Hello, I'm</small>
        <h1 class="text-3xl md:text-6xl">Drew Hornbein</h1>
        <p class="text-lg mt-4 max-w-prose w-[50vw] hidden md:block">{{ blurb }}</p>
      </div>
      <div class="quick-links flex flex-col gap-4 max-w-[240px]">
        <a v-for="(link, idx) in quickLinks" :key="idx" :href="link.href" class="btn"><BaseIcon :icon="link.icon" v-if="link.icon" /> {{ link.title }}</a>
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

const blurb = "I'm an expert collaborator. I help individuals and teams work in ways that better align with their purpose and what the world needs. I use art to translate ideas into form. I am a wildly talented facilitator and host. I use ritual and divination to touch into intuitive coaching to support change makers make really real change."

const social = [
  {
    href: 'https://twitter.com/dhornbein',
    icon: 'twitter',
    title: 'Twitter'
  },
  {
    href: 'https://instagram.com/dhornbein',
    icon: 'instagram',
    title: 'Instagram'
  },
  {
    href: 'https://facebook.com/dhornbein',
    icon: 'facebook',
    title: 'Facebook'
  },
  {
    href: 'https://www.linkedin.com/in/dddrew/',
    icon: 'linkedin',
    title: 'LinkedIn'
  },
  {
    href: 'https://www.discordapp.com/users/DHorn#1231',
    icon: 'discord',
    title: 'Discord'
  },

]

const quickLinks = [
  {
    icon: 'calendar',
    title: 'Book a Meeting',
    href: 'https://cal.com/dhornbein'
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
    class: 'border-[#ff28d4] text-[#ff28d4]',
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
    class: 'border-[#3b748a] text-[#3b748a]',
    title: 'Shared Ground',
    desc: 'A run a climate resilience sanctuary in Denver',
    href: 'https://sharedground.co'
  }
]
</script>

<style lang="scss">
body {
  @apply bg-slate-900 text-amber-100 p-4;
}

a {
  @apply text-rose-400 hover:text-rose-600;
}

.btn,
.btn:link {
  @apply inline-flex items-center gap-2 border-rose-400 border text-rose-400 font-bold py-2 px-4 rounded bg-slate-800/60 hover:text-white hover:bg-rose-400;
}

nav {
  @apply flex gap-4 justify-between items-center pb-2 border-b border-slate-600;
  a {
    @apply border-none inline-flex items-center gap-2;
  }
}


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
}
</style>