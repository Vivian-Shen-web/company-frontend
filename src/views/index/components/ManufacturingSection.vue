<script setup lang="ts">
import { asset } from '../data/qsdData'

defineOptions({
  name: 'ManufacturingSection'
})
</script>

<template>
  <section class="manufacture-section">
    <img class="manufacture-bg" :src="asset('u56.png')" alt="" />
    <div class="page-shell manufacture-content">
      <p class="eyebrow">ENGINEERING &amp; MANUFACTURING</p>
      <h2>Engineering &amp; manufacturing<br />at scale</h2>
      <p>
        Advanced R&amp;D, modern facilities and a commitment to quality help us deliver reliable
        electric three-wheelers for India and global markets.
      </p>
      <div class="manufacture-metrics">
        <span><strong>50,000+</strong>sets per month capacity</span>
        <span><strong>4</strong>advanced process facilities</span>
        <span><strong>OEM &amp; custom</strong>solutions</span>
      </div>
      <RouterLink class="ghost-pill ghost-pill--cyan" to="/factory">Explore manufacturing →</RouterLink>
    </div>
  </section>
</template>
