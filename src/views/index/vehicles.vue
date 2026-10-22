<script setup lang="ts">
import { computed, ref } from 'vue'

import QsdLayout from '@/components/qsd/QsdLayout.vue'
import { vehicles } from './data/qsdData'
import SubHero from './components/SubHero.vue'
import VehicleCard from './components/VehicleCard.vue'

defineOptions({
  name: 'QsdVehiclesPage'
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
  <QsdLayout>
    <SubHero title="THE LINEUP" subtitle="Compare our electric autos" current="Vehicels" />
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
  </QsdLayout>
</template>
