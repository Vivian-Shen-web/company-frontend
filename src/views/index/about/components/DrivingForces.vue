<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'DrivingForces'
})

const drivingForces = [
  {
    title: 'Our Purpose',
    copy: 'To provide reliable, zero-emission mobility for real streets and real working conditions.',
    width: 74,
    height: 72,
    parts: [{ src: asset('icon-purpose.svg'), x: 0, y: 0 }]
  },
  {
    title: 'Our Mission',
    copy: 'To deliver engineered electric tricycle platforms with full technical documentation and parts backup for global partners.',
    width: 72,
    height: 72,
    parts: [
      { src: asset('icon-mission-1.svg'), x: 0, y: 15 },
      { src: asset('icon-mission-2.svg'), x: 16, y: 0 }
    ]
  },
  {
    title: 'Our Vision',
    copy: 'To be the default manufacturing partner for distributors importing Chinese electric tricycles into mature markets.',
    width: 59,
    height: 72,
    parts: [
      { src: asset('icon-vision-1.svg'), x: 0, y: 0 },
      { src: asset('icon-vision-2.svg'), x: 16, y: 22 }
    ]
  }
]
</script>

<template>
  <section class="about-driving">
    <div class="page-shell">
      <p class="about-eyebrow">OUR DRIVING FORCES</p>
      <h2>Purpose, Mission &amp; Vision</h2>
      <div class="about-driving__grid">
        <article v-for="force in drivingForces" :key="force.title">
          <span class="about-driving__icon">
            <span
              class="about-icon"
              :style="{ width: `${force.width}px`, height: `${force.height}px` }"
            >
              <img
                v-for="part in force.parts"
                :key="part.src"
                :src="part.src"
                alt=""
                :style="{ left: `${part.x}px`, top: `${part.y}px` }"
              />
            </span>
          </span>
          <h3>{{ force.title }}</h3>
          <p>{{ force.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
