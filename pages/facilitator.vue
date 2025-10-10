<template>
  <main class="facilitator-page">
    <base-nav />

    <section class="hero justify-between">
      <div class="max-w-xl">
        <small class="text-amber-300">Experience Designer • Facilitator • Host</small>
        <h1 class="text-3xl md:text-6xl mt-2 font-mono">Helping groups think and feel together</h1>
        <div class="text-lg flex-col gap-4 mt-4 max-w-prose w-[50vw] hidden md:flex">
          <p>I am an <strong>experience designer</strong> with 10+ years of facilitation, hosting, and design experience. My work focuses on the intersection of two necessary questions:</p> 
          <ul class="list-['\00BB'] [&>*]:pl-2 list-outside ml-6 italic text-amber-300">
            <li>"how do we <strong>work</strong> together?"</li>
            <li>"how do we <strong>be</strong> together?"</li>
          </ul>
          <p>I help teams design plans, decisions, and tactics — and hold the rhythms, rituals, and practices that make trust and belonging possible.</p>
        </div>
      </div>

      <div class="mt-6 flex gap-3 flex-wrap">
        <a class="btn" href="https://cal.com/dhornbein/take?duration=30" target="_blank" rel="noopener"><Icon name="heroicons:calendar" /> Book a 30-minute consult</a>
      </div>
    </section>

    <div class="max-w-4xl px-4 sm:px-10 py-8 m-auto flex flex-col gap-8">
     
      <section class="md:hidden text-lg flex flex-col gap-4">
        <p>I am an <strong>experience designer</strong> with 10+ years of facilitation, hosting, and design experience. My work focuses on the intersection of two necessary questions:</p> 
          <ul class="list-['\00BB'] [&>*]:pl-2 list-outside ml-6 italic text-amber-300">
            <li>"how do we <strong>work</strong> together?"</li>
            <li>"how do we <strong>be</strong> together?"</li>
          </ul>
          <p>I help teams design plans, decisions, and tactics — and hold the rhythms, rituals, and practices that make trust and belonging possible.</p>
      </section>

      <section>
        <h2 data-emoji="🧭">How I help</h2>
  <p class="max-w-prose">I support groups across four related needs — strategy, tactics, reflection, and relational work. That can look like leading multi-day retreats to align leadership teams, running short design sprints to surface clear next steps, facilitating retrospectives to foster learning, or building rituals to create safety and cohesion.</p>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <li class="p-4 rounded border border-slate-700">
            <h3 class="mb-2">🎯 Strategy</h3>
            <p class="mb-2">Finding alignment and shared vision.</p>
      <p class="text-amber-300">Retreat design, retreats, alignment sessions, and shared roadmaps.</p>
          </li>
          <li class="p-4 rounded border border-slate-700">
            <h3 class="mb-2">⚙️ Tactical</h3>
            <p class="mb-2">Clear next steps and action plans.</p>
            <p class="text-amber-300">Design sprints, workshop curricula, decision frameworks, and methods for getting work done.</p>
          </li>
          <li class="p-4 rounded border border-slate-700">
            <h3 class="mb-2">🔁 Reflection</h3>
            <p class="mb-2">Learning from the past to improve future practices.</p>
            <p class="text-amber-300">Retrospectives, pause practices, and learning rhythms that help teams improve.</p>
          </li>
          <li class="p-4 rounded border border-slate-700">
            <h3 class="mb-2">🤝 Relational</h3>
            <p class="mb-2">Building trust, safety, and cohesion.</p>
            <p class="text-amber-300">Ritual design, trust-building practices, cultivating psychological safety, and practices for holding a healthy group field.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 data-emoji="🔧">Formats & fit</h2>
        <p class="max-w-prose">I work with small-to-medium teams and organizations — startups, non-profits, and values-aligned groups doing social justice work. I run in-person retreats, remote and hybrid workshops, and everything in between. My sweet spot is partnering with individuals or small teams to implement organizational change or create team experiences.</p>
      </section>

      <section>
        <h2 data-emoji="🌱">Approach</h2>
  <p class="max-w-prose">My methods are hybrid and practical. I draw inspiration from social permaculture, Art of Hosting, prefigurative activist facilitation, as well as group rituals and rhythms. I am comfortable moving between the rational and the magical— facilitating stand-ups and sprints alongside intentional openings, interpersonal relating, and closing practices. I keep things simple: build trust, feel safe, and bring people's intelligence together.</p>
      </section>

      <section>
        <h2 data-emoji="📚">Selected collaborations</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-12">
          <div v-for="collab in collaborations" :key="collab.alt" class="flex flex-col md:text-center gap-2 md:items-center">
            <img
              :src="collab.src"
              :alt="collab.alt"
              :class="collab.imgClass"
              class="h-16 mb-2 object-contain flex-shrink-0 self-start md:self-center"
            />
            <p class="text-sm">{{ collab.name }}</p>
            <p class="text-sm text-slate-200">{{ collab.desc }}</p>
          </div>
        </div>
      </section>

      <section class="hidden">
        <h2 data-emoji="💬">Testimonials & stories</h2>
        <p class="mb-4">Placeholders for testimonials and short case stories — I will add quotes and project blurbs later. For now, here's a spot to surface quick outcomes: alignment, tools for self-management, and more resilient culture.</p>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 border rounded">Testimonial placeholder</div>
          <div class="p-4 border rounded">Case story placeholder</div>
        </div>
      </section>

      <section class="py-6">
        <h2 data-emoji="🤝">Ready to talk?</h2>
        <p class="max-w-prose">If you're planning a retreat, need a facilitated offsite, or want to build stronger ways of working together, let's talk. I offer a short 30-minute consult to explore fit and outcomes.</p>
          <div class="mt-4">
            <a class="btn" href="https://cal.com/dhornbein/take?duration=30" target="_blank" rel="noopener"><Icon name="heroicons:calendar" /> Book 30-minute consult</a>
          </div>
      </section>

      <div class="w-full flex justify-center my-8" aria-hidden="true">
        <svg
          class="separator m-auto my-10 text-amber-300"
          width="300"
          viewBox="0 0 687 155"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="currentColor" stroke-width="7" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 58c27-13.33333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.66666667 80.5 20" opacity=".1"></path>
            <path d="M20 78c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" opacity=".2"></path>
            <path d="M20 98c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" opacity=".6"></path>
            <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"></path>
          </g>
        </svg>
      </div>

      <section>
        <h2 data-emoji="💻">Technology, design & web development</h2>
        <p class="max-w-prose">
          Beyond facilitation, I help teams harness technology and design to automate processes, improve collaboration, and communicate more effectively. See more about my skills and experience on my resume.
        </p>
        <div class="mt-4">
          <NuxtLink class="btn btn-gold" to="/resume"><Icon name="heroicons:document-text" />View my resume</NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const collaborations = [
  {
    src: '/facilitation/the-hum-logo.png',
    alt: 'The Hum logo',
    name: 'The Hum',
    desc: 'Supported facilitation, product development, and community programming as a collaborator',
    imgClass: ''
  },
  {
    src: '/facilitation/dpg-logo.png',
    alt: 'Denver Permaculture logo',
    name: 'Denver Permaculture',
    desc: 'Co-facilitated retreats & learning series in social permaculture',
    imgClass: 'bg-white rounded p-2'
  },
  {
    src: '/facilitation/people-medicine-logo.png',
    alt: 'People Medicine logo',
    name: 'People Medicine',
    desc: 'Founder, workshops, courses, and experience design for clients',
    imgClass: ''
  },
  {
    src: '/facilitation/ows_logo.png',
    alt: 'Occupy Wall Street logo',
    name: 'Occupy Wall Street (NYC)',
    desc: 'Facilitation of assemblies and working group meetings',
    imgClass: ''
  },
  {
    src: '/facilitation/ggw-logo.png',
    alt: 'Good Good Work logo',
    name: 'Good Good Work',
    desc: 'Founder, worked on culture shifting and process design for clients',
    imgClass: ''
  },
  {
    src: '/facilitation/nycga-logo.png',
    alt: 'NYCGA logo',
    name: 'New York City General Assembly',
    desc: 'Supported facilitation and assemblies',
    imgClass: ''
  },
  {
    src: '/facilitation/occupy-sandy-logo.jpg',
    alt: 'Occupy Sandy logo',
    name: 'Occupy Sandy',
    desc: 'Technical support & facilitation for disaster relief efforts in NYC',
    imgClass: 'bg-white rounded'
  },
  {
    src: '/facilitation/alf-text-logo.png',
    alt: 'ALF logo',
    name: 'Agile Learning Facilitator',
    desc: 'Facilitation of K-12 education and learning environments',
    imgClass: 'bg-white rounded'
  },
]
definePageMeta({
  title: 'Drew Hornbein — Experience Designer & Facilitator',
  alias: ['/facilitator', '/facilitation', '/experience-designer', '/experience-design']
})

useHead({
  meta: [
    { name: 'description', content: 'Drew Hornbein — experience designer and facilitator. Retreats, workshops, retrospectives, and ritual practices that build alignment, trust, and resilient culture.' },
    { name: 'keywords', content: 'facilitator, experience designer, retreats, workshops, retrospectives, team building, Drew Hornbein' }
  ]
})
</script>

<style lang="scss">


.hero {
  min-height: 80vh;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #475569; /* slate-600 */
  background-image: url('/drew-profile.png');
  background-size: auto 100%;
  background-position: right 0;
  background-repeat: no-repeat;
}

@media screen and (min-width: 767px) {
  .hero {
    background-image: url('/drew-blanket.png');
  }
}

@media print {
  .hero { background: none }
}



h2[data-emoji] {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
}
h2[data-emoji]::before {
  position: relative;
  left: 0;
  top: 0;
  content: attr(data-emoji);
}
@media (min-width: 640px) {
  h2[data-emoji]::before {
    position: absolute;
    transform: translateX(-2.5rem);
  }
}

h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
@media print {
  h3 { margin-bottom: 0.5rem; }
}
</style>
