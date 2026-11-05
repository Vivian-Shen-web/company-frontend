<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'GlobalService'
})
</script>

<template>
  <section class="about-global">
    <div class="page-shell about-global__inner">
      <div class="about-global__copy">
        <p class="about-eyebrow">GLOBAL SERVICE</p>
        <h2>Serving Global Customers:</h2>
        <p>
          Our electric tricycles and mobility solutions have been exported to many countries and
          regions, serving distributors, fleet operators and government projects around the world.
        </p>
        <p>
          We are committed to providing reliable products, professional support and long-term
          cooperation, helping our customers build successful electric mobility businesses in their
          local markets.
        </p>
      </div>
      <img :src="asset('about-global.png')" alt="QSD customers at an international exhibition" />
    </div>
  </section>
</template>
