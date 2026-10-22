<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import { useQsdStore } from '@/stores/modules/qsd'
import { asset } from './data/qsdData'

defineOptions({
  name: 'QsdFactoryPage'
})

const qsdStore = useQsdStore()

const processSteps = [
  'Design & Engineering',
  'Prototyping & Testing',
  'Tooling & Production',
  'Assembly & Quality Check',
  'Mass Production & Delivery'
]
</script>

<template>
  <QsdLayout>
    <section class="factory-hero" :style="{ backgroundImage: `linear-gradient(rgba(3, 24, 45, 0.78), rgba(3, 24, 45, 0.78)), url(${asset('u880.png')})` }">
      <div class="page-shell factory-hero__inner">
        <div>
          <p class="breadcrumb"><RouterLink to="/">Home</RouterLink> ＞ ODM / R&amp;D</p>
          <h1>DRIVE A BETTER<br />TOMORROW</h1>
          <p>
            QSD (QIANG SHENG) is an EV manufacturer and OEM partner with 15+ years of Indian-market
            experience. We design, engineer and manufacture high-performance electric autos and
            3-wheelers for brands, fleets and global markets.
          </p>
          <button class="primary-pill" type="button" @click="qsdStore.openInquiry">Start a Project →</button>
          <RouterLink class="ghost-pill ghost-pill--dark" to="/contact">Contact Us</RouterLink>
        </div>
      </div>
    </section>
    <section class="factory-content page-shell">
      <div class="factory-card">
        <p class="eyebrow">OUR DESIGN &amp; R&amp;D</p>
        <h2>Ideas. Technology. Tomorrow's mobility.</h2>
        <p>
          Our in-house design team and experienced R&amp;D professionals work on next-generation electric
          vehicle concepts, developing custom solutions based on your brand and market requirements.
        </p>
        <ul>
          <li>Concept design &amp; styling</li>
          <li>Engineering &amp; prototyping</li>
          <li>Component development</li>
          <li>Performance optimisation</li>
          <li>Exclusive models for your brand</li>
        </ul>
      </div>
      <div class="process-grid">
        <article v-for="(step, index) in processSteps" :key="step">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ step }}</h3>
        </article>
      </div>
    </section>
  </QsdLayout>
</template>
