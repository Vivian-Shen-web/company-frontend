<script setup lang="ts">
import { useQsdStore } from '@/stores/modules/qsd'
import type { VehicleModel } from '@/services/qsd/qsdData'

defineOptions({
  name: 'VehicleHighlights'
})

defineProps<{
  vehicle: VehicleModel
}>()

const qsdStore = useQsdStore()
</script>

<template>
  <section class="highlight-section page-shell">
    <div>
      <p class="eyebrow">KEY HIGHLIGHTS</p>
      <h2>Built for everyday passenger routes</h2>
      <p>
        The {{ vehicle.name }} is built to keep your passengers moving - safely, comfortably
        and affordably. Ideal for city routes, shuttle services and community transport.
      </p>
      <button class="card-link" type="button" @click="qsdStore.openInquiry">Talk to fleet sales →</button>
    </div>
    <div class="highlight-list">
      <span v-for="item in vehicle.highlights" :key="item">{{ item }}</span>
    </div>
  </section>
</template>
