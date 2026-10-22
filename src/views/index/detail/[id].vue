<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import QsdLayout from '@/components/qsd/QsdLayout.vue'
import { vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'
import DetailHero from './components/DetailHero.vue'
import VehicleHighlights from './components/VehicleHighlights.vue'
import VehicleSpecs from './components/VehicleSpecs.vue'

defineOptions({
  name: 'QsdVehicleDetailPage'
})

const route = useRoute()
const qsdStore = useQsdStore()

const vehicle = computed(() => {
  const id = String(route.params.id || '')
  return vehicles.find((item) => item.id === id) ?? vehicles[0]
})

watchEffect(() => {
  qsdStore.setActiveVehicle(vehicle.value.id)
})
</script>

<template>
  <QsdLayout>
    <DetailHero :vehicle="vehicle" />
    <VehicleSpecs :vehicle="vehicle" />
    <VehicleHighlights :vehicle="vehicle" />
  </QsdLayout>
</template>
