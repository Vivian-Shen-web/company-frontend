<script setup lang="ts">
import { useQsdStore } from '@/stores/modules/qsd'
import type { VehicleModel } from '@/services/qsd/qsdData'

defineOptions({
  name: 'DetailHero'
})

defineProps<{
  vehicle: VehicleModel
}>()

const qsdStore = useQsdStore()
</script>

<template>
  <section class="detail-hero">
    <div class="page-shell detail-layout">
      <div>
        <p class="eyebrow">QSD ELECTRIC AUTOS -- INDIA</p>
        <h1>{{ vehicle.name }}</h1>
        <p class="detail-copy">
          A modern electric passenger tricycle designed for daily urban mobility, offers smooth ride,
          reliable performance and low running cost.
        </p>
        <p class="detail-copy">{{ vehicle.description }} Compact, comfortable and efficient.</p>
        <button class="primary-pill" type="button" @click="qsdStore.openInquiry">Request a Quote</button>
        <button class="ghost-pill ghost-pill--dark" type="button">Download Brochure</button>
      </div>
      <div class="vehicle-turntable">
        <img :src="vehicle.image" :alt="vehicle.name" />
      </div>
    </div>
  </section>
</template>
