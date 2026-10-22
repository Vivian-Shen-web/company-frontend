<script setup lang="ts">
defineOptions({
  name: 'StatsStrip'
})

const stats = [
  ['15+ years', 'EV manufacturing', 'experience'],
  ['50,000+ sets', 'monthly production', 'capacity'],
  ['Quality', 'International quality', 'standards'],
  ['Partner', 'Pan-India dealer &', 'service network']
]
</script>

<template>
  <section class="stats-strip page-shell">
    <div v-for="[title, firstLine, secondLine] in stats" :key="title" class="stat-card">
      <strong>{{ title }}</strong>
      <span>{{ firstLine }}<br />{{ secondLine }}</span>
    </div>
  </section>
</template>
