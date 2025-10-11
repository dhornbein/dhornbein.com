<template>
  <div class="flex flex-col">
    <base-nav />
    <iframe class="grow min-h-[90vh]" :src="calURL" frameborder="0" scrolling="no"></iframe>
  </div>
</template>

<script setup>
definePageMeta({
  alias: ['/cal'],
})
const calSettings = {
  height: 600,
  wkst: 2,
  bgcolor: '#ffffff',
  ctz: 'America/Denver',
  showTitle: 0,
}

const isAgenda = ref(false)

function updateAgendaMode() {
  // Tailwind breakpoints: md = 768px, lg = 1024px
  isAgenda.value = window.innerWidth < 768
}

onMounted(() => {
  updateAgendaMode()
  window.addEventListener('resize', updateAgendaMode)
})

const calURL = computed(() => {
  const base = 'https://calendar.google.com/calendar/embed?&src=ZHJld0BkaG9ybmJlaW4uY29t&src=ZGhvcm5iZWluQGdtYWlsLmNvbQ&src=ZHJld0B0aGVodW0ub3Jn&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237349cb&color=%23D50000&color=%2333B679&color=%23616161&'
  const params = new URLSearchParams(calSettings)
  if (isAgenda.value) {
    params.set('mode', 'AGENDA')
  }
  return base + params.toString()
})
</script>