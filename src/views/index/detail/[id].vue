<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import QsdLayout from '@/components/qsd/QsdLayout.vue'
import { useQsdStore } from '@/stores/modules/qsd'
import { vehicles } from '../data/qsdData'
import VehicleHighlights from '../components/VehicleHighlights.vue'
import VehicleSpecs from '../components/VehicleSpecs.vue'

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
    <VehicleSpecs :vehicle="vehicle" />
    <VehicleHighlights :vehicle="vehicle" />
  </QsdLayout>
</template>
