<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'StatsStrip'
})

interface StatOverlay {
  icon: string
  left: number
  top: number
  width: number
  height: number
}

interface StatItem {
  icon: string
  width: number
  height: number
  overlay?: StatOverlay
  title: string
  firstLine: string
  secondLine: string
}

const stats: StatItem[] = [
  {
    icon: 'u28.svg',
    width: 64,
    height: 60,
    title: '25+ years',
    firstLine: 'Sound Supply Chain',
    secondLine: 'Ecosystem'
  },
  {
    icon: 'u391.svg',
    width: 60,
    height: 65,
    title: 'ODM & R&D',
    firstLine: 'Market-demand-driven',
    secondLine: 'customized innovation'
  },
  {
    icon: 'u37.svg',
    width: 52,
    height: 60,
    title: '48 Hours',
    firstLine: 'Responsive After-sales',
    secondLine: 'Services'
  },
  {
    icon: 'u32.svg',
    width: 60,
    height: 60,
    overlay: { icon: 'u33.svg', left: 6, top: 10, width: 45, height: 46 },
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
        <img
          class="stat-icon__base"
          :src="asset(stat.icon)"
          :style="{ width: `${stat.width}px`, height: `${stat.height}px` }"
          alt=""
        />
        <img
          v-if="stat.overlay"
          class="stat-icon__overlay"
          :src="asset(stat.overlay.icon)"
          :style="{
            left: `${stat.overlay.left}px`,
            top: `${stat.overlay.top}px`,
            width: `${stat.overlay.width}px`,
            height: `${stat.overlay.height}px`
          }"
          alt=""
        />
      </span>
      <strong>{{ stat.title }}</strong>
      <span>{{ stat.firstLine }}<br />{{ stat.secondLine }}</span>
    </div>
  </section>
</template>
