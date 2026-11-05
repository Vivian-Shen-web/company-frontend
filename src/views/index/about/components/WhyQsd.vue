<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'WhyQsd'
})

const whyPoints = [
  {
    title: 'Fully Enclosed Cabin Design',
    copy: 'Comfortable, safe and weather resistant for more application scenarios.',
    width: 61,
    height: 69,
    parts: [{ src: asset('icon-cabin.svg'), x: 0, y: 0 }]
  },
  {
    title: 'Grade-A Steel & E-Coat',
    copy: 'High strength materials and anti-rust coating for long service life.',
    width: 62,
    height: 62,
    parts: [
      { src: asset('icon-steel-1.svg'), x: 0, y: 25 },
      { src: asset('icon-steel-2.svg'), x: 12, y: 0 },
      { src: asset('icon-steel-3.svg'), x: 16, y: 2 },
      { src: asset('icon-steel-4.svg'), x: 29, y: 26 }
    ]
  },
  {
    title: 'Long-Life Battery Systems',
    copy: 'Reliable lithium battery solutions with stable performance.',
    width: 73,
    height: 74,
    parts: [
      { src: asset('icon-battery-1.svg'), x: 0, y: 0 },
      { src: asset('icon-battery-2.svg'), x: 16, y: 49 }
    ]
  },
  {
    title: 'In-House R&D Team',
    copy: 'Experienced engineers and continuous new model development.',
    width: 72,
    height: 64,
    parts: [{ src: asset('icon-rd.svg'), x: 0, y: 0 }]
  },
  {
    title: 'Export Documentation',
    copy: 'Complete export documents and certifications for smooth customs clearance.',
    width: 57,
    height: 70,
    parts: [{ src: asset('icon-export.svg'), x: 0, y: 0 }]
  },
  {
    title: 'After-Sales Parts Backup',
    copy: 'Full range of spare parts support and professional technical guidance.',
    width: 65,
    height: 72,
    parts: [{ src: asset('icon-service.svg'), x: 0, y: 0 }]
  }
]
</script>

<template>
  <section class="about-why">
    <div class="page-shell">
      <p class="about-eyebrow">WHY QSD</p>
      <h2>Why Choose QSD?</h2>
      <p class="about-subtitle">
        More than a manufacturer. A long-term partner for your electric mobility business.
      </p>
      <div class="about-why__grid">
        <article v-for="point in whyPoints" :key="point.title">
          <span
            class="about-why__icon about-icon"
            :style="{ width: `${point.width}px`, height: `${point.height}px` }"
          >
            <img
              v-for="part in point.parts"
              :key="part.src"
              :src="part.src"
              alt=""
              :style="{ left: `${part.x}px`, top: `${part.y}px` }"
            />
          </span>
          <div>
            <h3>{{ point.title }}</h3>
            <p>{{ point.copy }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
