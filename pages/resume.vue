<template>
  <div class="resume scroll-smooth">
    <base-nav />
    <div class="max-w-4xl print:max-w-full px-4 sm:px-10 py-8 print:py-0 m-auto flex flex-col gap-8 print:gap-2">
      <header class="text-center">
        <h1>Drew Hornbein</h1>
        <p><strong>Web Developer • Designer • Systems Thinker</strong></p>
        <p class="flex items-center justify-center gap-3 flex-wrap mt-4 print:mt-0">
          <span class="text-nowrap flex items-center gap-1">
            <BaseIcon icon="mail" /> drew@dhornbein.com
          </span>
          <span class="text-nowrap flex items-center gap-1">
            <BaseIcon icon="phone" /> +1 (773) 270-3739
          </span>
        </p>
        <div class="quick-links flex flex-col gap-4 mt-4 max-w-[520px] mx-auto print:hidden">
          <div class="flex gap-2 flex-wrap justify-center">
            <a class="btn" href="mailto:drew@dhornbein.com"><BaseIcon icon="mail" /> Email Me</a>
            <a class="btn" href="tel:+17732703739"><BaseIcon icon="phone" /> Call Me</a>
          </div>
        </div>
      </header>
      <section>
        <h2 data-emoji="🔧">Core Skills & Tools</h2>
        <ul>
          <li class="mb-4 print:mb-0 print:flex items-baseline gap-2" v-for="(skill, category) in skills" :key="category">
            <h3 class="print:after:content-[':'] print:text-nowrap">{{ category }}</h3>
            <ul class="flex gap-2 flex-wrap">
              <li v-for="item in skill" :key="item" class="px-2 rounded border border-blue-900 text-amber-300 print:border-0 print:px-0 print:after:content-[','] print:last:after:content-['']">{{ item }}</li>
            </ul>
          </li>
          <li><p class="max-w-prose print:max-w-full"><strong>Ethos:</strong> I use AI tools fluently but ground every solution in real technical understanding — I debug, I refactor, I build from scratch.</p></li>
        </ul>
      </section>
      <section>
        <h2 data-emoji="🛠">Professional Experience</h2>
        <div v-for="experience in experienceList" :key="experience.title" class="mb-4 print:mb-2">
          <h3 class="mb-0 print:inline-block print:mr-2">{{ experience.organization }}</h3>
          <p class="italic text-amber-300 mb-4 print:mb-0 print:inline-block">{{ experience.role }}</p>
          <p class="max-w-prose print:max-w-full">{{ experience.description }}</p>
        </div>
        <p class="print:hidden"><a href="#portfolio">&darr; See more (with pictures) below...</a></p>
      </section>
      <section>
        <h2 data-emoji="🎨">Strategy, Design & Systems</h2>
        <ul class="list-disc list-outside ml-8">
          <li v-for="item in strategy" :key="item">{{ item }}</li>
        </ul>
      </section>
      <section>
        <h2 data-emoji="🤝">Collaboration & Fit</h2>
        <ul class="list-disc list-outside ml-8">
          <li v-for="item in collaboration" :key="item">{{ item }}</li>
        </ul>
      </section>
    </div>
  </div>
  <Portfolio id="portfolio" class="print:hidden" />
</template>

<script setup>
definePageMeta({
  alias: ['/wizard','/resumee'],
})

// Define page metadata and open graph
useHead({
  title: 'Drew Hornbein - Resume | Web Developer & Designer',
  meta: [
    {
      name: 'description',
      content: 'Front-end developer and systems thinker with deep experience in Vue, Nuxt, and responsive web design. Specializing in custom interfaces, solving integration problems, and collaborating with design-forward teams.'
    },
    {
      name: 'keywords',
      content: 'Drew Hornbein, web developer, frontend developer, Vue.js, Nuxt.js, designer, systems thinker, resume, portfolio, JavaScript, SCSS, WordPress, Airtable'
    },
    {
      name: 'author',
      content: 'Drew Hornbein'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Drew Hornbein - Resume | Web Developer & Designer'
    },
    {
      property: 'og:description',
      content: 'Front-end developer and systems thinker with deep experience in Vue, Nuxt, and responsive web design. Specializing in custom interfaces and collaborative workflows.'
    },
    {
      property: 'og:type',
      content: 'profile'
    },
    {
      property: 'og:url',
      content: 'https://dhornbein.com/resume'
    },
    {
      property: 'og:image',
      content: 'https://dhornbein.com/og-default.jpg'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      property: 'og:site_name',
      content: 'Drew Hornbein'
    },
    {
      property: 'og:locale',
      content: 'en_US'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Drew Hornbein - Resume | Web Developer & Designer'
    },
    {
      name: 'twitter:description',
      content: 'Front-end developer and systems thinker with deep experience in Vue, Nuxt, and responsive web design.'
    },
    {
      name: 'twitter:image',
      content: 'https://dhornbein.com/og-default.jpg'
    },
    // Additional meta
    {
      name: 'format-detection',
      content: 'telephone=yes'
    },
    {
      name: 'theme-color',
      content: '#000000'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://dhornbein.com/resume'
    }
  ]
})

// Define the skills and tools

const skills = ref({
  Frontend: ["HTML", "SCSS", "JS", "Vue/Nuxt/React", "Hugo", "Jekyll", "Tailwind", "Email Templates"],
  "Backend / Infra": ["Node", "PHP", "MySQL", "JSON", "RegEx", "Bash", "GitHub Actions", "Linux servers", "JWT", "OAuth"],
  Platforms: ["WordPress Dev", "Airtable", "Shopify", "Webflow", "Squarespace", "Wix", "Django", "RESTful", "Graphql APIs"],
  "Design & Content": ["Adobe Suite", "Figma", "Branding", "Print layout", "UX/UI strategy"],
});

const experienceList = ref([
  {
    organization: "Protocol Oral History Project – CU Boulder",
    location: "",
    role: "Frontend Developer (Contract)",
    description: "Built a performant Hugo site with markdown publishing, open-source infra, and automated graphics. Managed CI/CD and server deployment.",
  },
  {
    organization: "Community Rule – CU Boulder",
    role: "Lead Designer & Frontend Engineer",
    description: "Led branding and UX for a governance toolkit. Migrated Jekyll to Vue, integrating collaborative workflows and responsive design.",
  },
  {
    organization: "Shared Ground",
    role: "Technical Lead & Co-Founder",
    description: "Developed Airtable-based event system and Nuxt.js site. Created brand identity and aligned tools with community-led, volunteer workflows.",
  },
]);

const strategy = ref([
  "Full branding → site builds",
  "Automated content pipelines (social, CMS, etc.)",
  "Print + digital cohesion (zines, books, companion sites)",
  "Tech consulting: matching tools to needs",
]);

const collaboration = ref([
  "Coop founder & long-time freelancer",
  "Comfortable leading or integrating with teams",
  "Best fit: 5-10 hrs/week, $80-$150/hr",
  "Ideal clients: small, mission-aligned teams with complex needs and healthy budgets",
]);
</script>

<style lang="scss">
h1 {
  @apply text-4xl font-bold mb-4 print:mb-2;
}
h2 {
  @apply text-2xl font-bold mb-4 print:mb-2 border-b border-blue-900 pb-2 print:pb-0;
}

h3 {
  @apply text-lg font-semibold mb-2 print:mb-2;
}

h2[data-emoji] {
  position: relative;

  &::before {
    @apply relative sm:absolute sm:-translate-x-10 left-0 top-0;
    content: attr(data-emoji);
  }
}

@media print {
  .main-nav { display: none;}
  .resume {
    background: #fff;
    font-size: 12pt;

    & * { color: #000 !important; }

    header {
      h1 {
        font-size: 18pt;
      }

      p {
        font-size: 10pt;
      }
    }

    section {
      h2 {
        font-size: 14pt;
      }

      ul {
        li {
          font-size: 10pt;
        }
      }
    }
  }
}
</style>