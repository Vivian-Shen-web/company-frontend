<script setup lang="ts">
import { computed, ref } from 'vue'

import VehicleCard from '@/components/qsd/VehicleCard.vue'
import { vehicles } from '@/services/qsd/qsdData'

defineOptions({
  name: 'VehicleCatalog'
})

const searchValue = ref('')

const searchedVehicles = computed(() => {
  const keyword = searchValue.value.trim().toLowerCase()
  if (!keyword) return vehicles
  return vehicles.filter((vehicle) =>
    [vehicle.name, vehicle.category, vehicle.description].some((value) => value.toLowerCase().includes(keyword))
  )
})
</script>

<template>
  <section class="compare-catalog page-shell">
    <div class="catalog-toolbar">
      <a-input v-model:value="searchValue" size="large" placeholder="Search vehicles,features..." />
      <RouterLink class="primary-pill" to="/compare">Compare now</RouterLink>
    </div>
    <div class="vehicle-grid">
      <VehicleCard
        v-for="vehicle in searchedVehicles"
        :key="vehicle.id"
        :vehicle="vehicle"
        compact
        show-compare
      />
    </div>
  </section>
</template>
