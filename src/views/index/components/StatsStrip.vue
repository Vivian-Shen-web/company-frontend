<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'StatsStrip'
})

interface StatItem {
  icon: string
  overlay?: string
  title: string
  firstLine: string
  secondLine: string
}

const stats: StatItem[] = [
  { icon: 'u29.svg', title: '25+ years', firstLine: 'Sound Supply Chain', secondLine: 'Ecosystem' },
  {
    icon: 'u34.svg',
    overlay: 'u35.svg',
    title: 'ODM & R&D',
    firstLine: 'Market-demand-driven',
    secondLine: 'customized innovation'
  },
  {
    icon: 'u40.svg',
    overlay: 'u41.svg',
    title: '48 Hours',
    firstLine: 'Responsive After-sales',
    secondLine: 'Services'
  },
  {
    icon: 'u45.svg',
    title: 'Over 2 Million Units',
    firstLine: 'Exported to more than 30',
    secondLine: 'countries worldwide'
  }
]
</script>

<template>
  <section class="stats-strip">
    <div v-for="stat in stats" :key="stat.title" class="stat-card">
      <span class="stat-icon">
        <img class="stat-icon__base" :src="asset(stat.icon)" alt="" />
        <img
          v-if="stat.overlay"
          class="stat-icon__overlay"
          :class="`stat-icon__overlay--${stat.overlay.replace('.svg', '')}`"
          :src="asset(stat.overlay)"
          alt=""
        />
      </span>
      <strong>{{ stat.title }}</strong>
      <span>{{ stat.firstLine }}<br />{{ stat.secondLine }}</span>
    </div>
  </section>
</template>
