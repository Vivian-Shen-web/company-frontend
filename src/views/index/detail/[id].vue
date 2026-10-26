<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import QsdLayout from '@/components/qsd/QsdLayout.vue'
import { vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'
import DetailHero from './components/DetailHero.vue'
import RelatedVehicles from './components/RelatedVehicles.vue'
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
    <RelatedVehicles />
    <section class="detail-bottom-cta">
      <div class="page-shell detail-bottom-cta__inner">
        <h2>Ready to electrify your fleet?</h2>
        <div>
          <button class="primary-pill" type="button" @click="qsdStore.openInquiry">
            Request a Quote
          </button>
          <RouterLink class="ghost-pill ghost-pill--light" to="/dealer">Find a Dealer</RouterLink>
        </div>
      </div>
    </section>
  </QsdLayout>
</template>
