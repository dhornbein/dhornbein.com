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
    <section id="portfolio" class="portfolio-section mt-8">
      <h2 id="portfolio" class="title text-6xl mb-4">Portfolio</h2>
      <div v-for="project in portfolioProjects" :key="project.id" :id="project.id" class="project-section mb-8">
        <h3 class="text-3xl mb-4 font-bold">{{ project.title }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <template v-for="(item, index) in project.items" :key="index">
            <div v-if="item.type === 'image'" :class="`bg-gray-200 relative overflow-hidden ${item.class}`">
              <img :src="item.src" :alt="item.caption" class="w-full h-full object-cover" />
            </div>
            <div v-else :class="`flex flex-col items-center ${item.class}`">
              <p class="text-justify">{{ item.content }}</p>
              <div v-if="item.links" class="mt-4 flex flex-wrap items-start w-full gap-2">
                <a v-for="(link, linkIndex) in item.links" :key="linkIndex" 
                   :href="link.url" 
                   :class="link.class">
                  {{ link.text }}
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>

const portfolioProjects = [
  {
    id: 'sacred-stacks',
    title: 'Sacred Stacks: The Art of Cyborg Community',
    items: [
      {
        type: 'text',
        content: 'I worked with CU Boulder\'s MEDLab to create an illustrated booklet to highlight their research on community technology use. I hand illustrated and layed out 84 pages and created a website to download the book.',
        class: '',
        links: [
          {
            text: 'View & Download',
            url: 'https://ipfs.metalabel.xyz/ipfs/QmQvVuzF85JDapSAYd8Ke1H2V8ey5je28hbN1UUJn6Hu6e/',
            class: 'btn inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2'
          }
        ]
      },
      {
        type: 'image',
        src: '/portfolio/ss-stack-spread-80.jpg',
        caption: 'Sacred Stacks Spread',
        class: 'md:col-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/ss-cover-80.jpg',
        caption: 'Sacred Stacks Zine Cover',
        class: 'md:row-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/ss-tower-80.jpg',
        caption: 'Sacred Stacks Tower Illustration',
        class: 'md:col-span-1'
      },
      {
        type: 'image',
        src: '/portfolio/ss-illustration-hand-80.jpg',
        caption: 'Sacred Stacks Hand Illustration',
        class: 'md:col-span-1'
      },
      {
        type: 'image',
        src: '/portfolio/ss-hostile-terrortories-spread-80.jpg',
        caption: 'Sacred Stacks Hostile Territories Spread',
        class: 'md:col-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/ss-monitor-art-80.jpg',
        caption: 'Sacred Stacks Monitor Art',
        class: 'md:col-span-2'
      },
      {
        type: 'text',
        content: 'In the second half of 2022, MEDLab guided seven communities in exploring the needs, ethics, and challenges of decentralized technologies. What started as a search for practical tools evolved into an exploration of ritual, relationships, and poetics. This fully illustrated 80-page zine captures reflections from the Sacred Stacks cohort.',
        class: '',
        links: [
          {
            text: 'Learn More',
            url: 'https://www.colorado.edu/lab/medlab/2023/03/22/now-available-sacred-stacks-art-cyborg-community',
            class: 'btn inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2'
          }
        ]
      },
    ]
  },
  {
    id: 'community-rule',
    title: 'Community Rule',
    items: [
      {
        type: 'text',
        content: 'I designed a zine outlining core community rule sets, creating a cohesive visual language and style guide. I then applied this to a full website redesign, including UX design for their community rule builder tool. Refactored their Jekyll site into a Vue.js system, ready for open-source collaboration.',
        class: '',
        links: [
          {
            text: 'Visit Website',
            url: 'https://communityrule.info/',
            class: 'btn inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2'
          },
          {
            text: 'Learn More',
            url: 'https://www.colorado.edu/lab/medlab/2022/05/20/communityrule-refactor-now-online',
            class: 'btn inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2'
          }
        ]
      },
      {
        type: 'image',
        src: '/portfolio/cr-cover-square-80.jpg',
        caption: 'Community Rule Square Cover',
        class: 'md:col-span-1'
      },
      {
        type: 'image',
        src: '/portfolio/cr-icons-80.jpg',
        caption: 'Community Rule Icons',
        class: 'md:row-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/cr-style-guide-80.jpg',
        caption: 'Community Rule Style Guide',
        class: 'md:col-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/cr-covers-80.jpg',
        caption: 'Community Rule Covers',
        class: 'md:row-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/cr-spread-80.jpg',
        caption: 'Community Rule Zine Spread',
        class: 'md:col-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/cr-website-80.jpg',
        caption: 'Community Rule Website Screenshot',
        class: 'md:col-span-2'
      },
    ]
  },
  {
    id: 'can-website',
    title: 'CAN Website',
    items: [
      {
        type: 'text',
        content: 'A custom WordPress theme built using cutting-edge core block editor technology, along with an advanced custom plugin to display events and projects within the block editor.',
        class: '',
        links: [
          {
            text: 'Visit Website',
            url: 'https://civilaction.net/',
            class: 'btn inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2'
          }
        ]
      },
      {
        type: 'image',
        src: '/portfolio/can-page-front-80.jpg',
        caption: 'CAN Website Front Page',
        class: 'md:col-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/can-logo-80.jpg',
        caption: 'CAN Logo',
        class: ''
      },
      {
        type: 'image',
        src: '/portfolio/can-page-termine-80.jpg',
        caption: 'CAN Website Termine Page',
        class: 'md:col-span-2'
      }
    ]
  },
  {
    id: 'smart-start-nh',
    title: 'Smart Start New Hampshire',
    items: [
      {
        type: 'text',
        content: 'Developed a custom WordPress theme with a legislator lookup plugin, using a public data API and user location to display representative information.',
        class: '',
        links: []
      },
      {
        type: 'image',
        src: '/portfolio/smart-website-80.jpg',
        caption: 'Smart Start NH Website Screenshot',
        class: 'md:col-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/smart-leg-lookup-80.jpg',
        caption: 'Smart Start NH Legislator Lookup',
        class: 'md:col-span-1'
      },
      {
        type: 'image',
        src: '/portfolio/smart-code-80.jpg',
        caption: 'Smart Start NH Code',
        class: 'md:col-span-1'
      }
    ]
  },
  {
    id: 'ballots-building-power',
    title: 'Ballots Building Power',
    items: [
      {
        type: 'text',
        content: 'Implemented a static design in Webflow. The interactive map was a challenging feature, but the client wanted it, and I successfully delivered.',
        class: '',
        links: [
          {
            text: 'Visit Website',
            url: 'https://www.ballotsbuildingpower.com/',
            class: 'btn inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2'
          }
        ]
      },
      {
        type: 'image',
        src: '/portfolio/bbp-website-80.jpg',
        caption: 'Ballots Building Power Website',
        class: 'md:col-span-2'
      },
      {
        type: 'image',
        src: '/portfolio/bbp-page-spread-80.jpg',
        caption: 'Ballots Building Power Page Spread',
        class: 'md:col-span-2'
      }
    ]
  }
]

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