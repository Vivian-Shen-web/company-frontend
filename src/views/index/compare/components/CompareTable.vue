<script setup lang="ts">
import { computed } from 'vue'

import { useQsdStore } from '@/stores/modules/qsd'
import { vehicles } from '@/services/qsd/qsdData'

defineOptions({
  name: 'CompareTable'
})

const qsdStore = useQsdStore()
const whatsappLink = 'https://wa.me/8615030611128'

const specRows = computed(() => {
  const keys = Array.from(new Set(vehicles.flatMap((vehicle) => Object.keys(vehicle.specs))))
  return keys.map((key) => ({
    spec: key,
    ...Object.fromEntries(vehicles.map((vehicle) => [vehicle.id, vehicle.specs[key] || '-']))
  }))
})
</script>

<template>
  <section class="page-shell table-section">
    <a-table :pagination="false" :data-source="specRows" row-key="spec" bordered>
      <a-table-column title="" data-index="spec" key="spec" fixed="left" />
      <a-table-column
        v-for="vehicle in vehicles"
        :key="vehicle.id"
        :title="vehicle.name"
        :data-index="vehicle.id"
      />
    </a-table>
    <div class="compare-actions">
      <button class="quote-pill" type="button" @click="qsdStore.openInquiry">
        Get Free Quote →
      </button>
      <a class="whatsapp-pill" :href="whatsappLink" target="_blank" rel="noopener">
        <span class="whatsapp-pill__icon" />
        Whats APP
      </a>
    </div>
  </section>
</template>
