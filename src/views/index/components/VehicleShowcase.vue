<script setup lang="ts">
import { storeToRefs } from 'pinia'

import VehicleCard from '@/components/qsd/VehicleCard.vue'
import { categories } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'VehicleShowcase'
})

const qsdStore = useQsdStore()
const { currentCategory, filteredVehicles } = storeToRefs(qsdStore)
</script>

<template>
  <section class="vehicle-section page-shell">
    <div class="section-heading">
      <p class="eyebrow">THE LINEUP</p>
      <h2>Electric autos for every route</h2>
    </div>
    <a-tabs v-model:active-key="currentCategory" class="qsd-tabs">
      <a-tab-pane v-for="category in categories" :key="category" :tab="category" />
    </a-tabs>
    <div class="vehicle-grid">
      <VehicleCard v-for="vehicle in filteredVehicles" :key="vehicle.id" :vehicle="vehicle" />
    </div>
  </section>
</template>
