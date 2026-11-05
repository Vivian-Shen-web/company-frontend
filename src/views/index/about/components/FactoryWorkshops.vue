<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'FactoryWorkshops'
})

const workshops = [
  {
    title: 'Forging and Cutting Shop',
    copy: 'Cuts and forms steel, tubing, and sheet metal for accurate frames and structural parts. Precise processing supports better welding, assembly, and mass-production consistency.',
    image: asset('workshop-1.png')
  },
  {
    title: 'Sheet Metal Shop',
    copy: 'Processes body panels, cargo boxes, outer shells, and bulkheads. Accurate sheet metal work improves exterior smoothness and component fit.',
    image: asset('workshop-2.png')
  },
  {
    title: 'Welding Shop',
    copy: 'Welds frames, chassis, cargo beds, and body structures. Stable welding improves load capacity, durability, and reduces after-sales issues.',
    image: asset('workshop-3.png')
  },
  {
    title: 'Electrocoating and Painting Shop',
    copy: 'Provides electrocoating and painting for rust resistance and surface protection. Proper treatment helps vehicles suit humid, hot, and rough environments.',
    image: asset('workshop-4.png')
  },
  {
    title: 'Assembly Workshop',
    copy: 'Assembles motors, controllers, batteries, tires, seats, lights, and body parts. Standardized assembly improves vehicle consistency and bulk-order delivery.',
    image: asset('workshop-5.png')
  },
  {
    title: 'Quality Inspection Department',
    copy: 'Inspects electrical systems, brakes, powertrain, exterior, and key components before shipment. Strict inspection helps reduce quality problems and after-sales pressure.',
    image: asset('workshop-6.png')
  }
]
</script>

<template>
  <section class="about-workshops">
    <div class="page-shell">
      <p class="about-eyebrow">INSIDE THE FACTORY</p>
      <h2>Production Workshops in QSD</h2>
      <p class="about-subtitle">Advanced facilities. Professional processes. Reliable quality.</p>
      <div class="about-workshops__grid">
        <article v-for="workshop in workshops" :key="workshop.title">
          <img :src="workshop.image" :alt="workshop.title" loading="lazy" />
          <h3>{{ workshop.title }}</h3>
          <p>{{ workshop.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
