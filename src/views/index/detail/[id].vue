<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import QsdLayout from '@/components/qsd/QsdLayout.vue'
import QsdBottomCta from '@/components/qsd/QsdBottomCta.vue'
import { vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'
import ConclusionFaq from './components/ConclusionFaq.vue'
import DetailBenefits from './components/DetailBenefits.vue'
import DetailHero from './components/DetailHero.vue'
import SuccessStories from './components/SuccessStories.vue'
import UserFeedback from './components/UserFeedback.vue'
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
    <VehicleHighlights :vehicle="vehicle" />
    <VehicleSpecs :vehicle="vehicle" />
    <DetailBenefits :vehicle="vehicle" />
    <SuccessStories />
    <UserFeedback />
    <ConclusionFaq />
    <QsdBottomCta />
  </QsdLayout>
</template>
