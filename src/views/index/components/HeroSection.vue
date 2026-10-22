<script setup lang="ts">
import { useQsdStore } from '@/stores/modules/qsd'
import { asset } from '../data/qsdData'

defineOptions({
  name: 'HeroSection'
})

const qsdStore = useQsdStore()
</script>

<template>
  <section class="hero-section">
    <img class="hero-bg" :src="asset('u13.png')" alt="" />
    <div class="page-shell hero-content">
      <p class="eyebrow">QSD ELECTRIC AUTOS -- INDIA</p>
      <h1>
        ENGINEERED FOR<br />
        INDIA'S ROADS.
      </h1>
      <h2>BUILT FOR TOMORROW.</h2>
      <p class="hero-copy">
        L5-category high-speed electric three-wheelers for passenger and cargo fleets - lower
        running cost, longer range, built for real Indian roads.
      </p>
      <div class="hero-actions">
        <RouterLink class="primary-pill" to="/vehicles">Explore Vehicles</RouterLink>
        <button class="ghost-pill ghost-pill--light" type="button">Download Brochure</button>
      </div>
    </div>
    <button class="sr-only" type="button" @click="qsdStore.openInquiry">Request a quote</button>
  </section>
</template>
