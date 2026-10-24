<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'StatsStrip'
})

const stats = [
  ['u29.svg', '15+ years', 'EV manufacturing', 'experience'],
  ['u34.svg', '50,000+ sets', 'monthly production', 'capacity'],
  ['u40.svg', 'Quality', 'International quality', 'standards'],
  ['u45.svg', 'Partner', 'Pan-India dealer &', 'service network']
]
</script>

<template>
  <section class="stats-strip">
    <div v-for="[icon, title, firstLine, secondLine] in stats" :key="title" class="stat-card">
      <img :src="asset(icon)" alt="" />
      <strong>{{ title }}</strong>
      <span>{{ firstLine }}<br />{{ secondLine }}</span>
    </div>
  </section>
</template>
