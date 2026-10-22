<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'FactoryHero'
})

const qsdStore = useQsdStore()
</script>

<template>
  <section
    class="factory-hero"
    :style="{ backgroundImage: `linear-gradient(rgba(3, 24, 45, 0.78), rgba(3, 24, 45, 0.78)), url(${asset('u880.png')})` }"
  >
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
</template>
