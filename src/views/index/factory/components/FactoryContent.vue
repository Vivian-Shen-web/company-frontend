<script setup lang="ts">
defineOptions({
  name: 'FactoryContent'
})

const processSteps = [
  'Design & Engineering',
  'Prototyping & Testing',
  'Tooling & Production',
  'Assembly & Quality Check',
  'Mass Production & Delivery'
]
</script>

<template>
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
</template>
