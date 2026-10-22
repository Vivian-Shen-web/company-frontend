<script setup lang="ts">
import { computed } from 'vue'

import QsdLayout from '@/components/qsd/QsdLayout.vue'
import { useQsdStore } from '@/stores/modules/qsd'
import { vehicles } from './data/qsdData'
import SubHero from './components/SubHero.vue'

defineOptions({
  name: 'QsdComparePage'
})

const qsdStore = useQsdStore()

const specRows = computed(() => {
  const keys = Array.from(new Set(vehicles.flatMap((vehicle) => Object.keys(vehicle.specs))))
  return keys.map((key) => ({
    spec: key,
    ...Object.fromEntries(vehicles.map((vehicle) => [vehicle.id, vehicle.specs[key] || '-']))
  }))
})
</script>

<template>
  <QsdLayout>
    <SubHero title="Side-by-side specifications" subtitle="* L5 figures are indicative, final specs at launch." current="Vehicels" />
    <section class="page-shell table-section">
      <a-table :pagination="false" :data-source="specRows" row-key="spec" bordered>
        <a-table-column title="" data-index="spec" key="spec" fixed="left" />
        <a-table-column v-for="vehicle in vehicles" :key="vehicle.id" :title="vehicle.name" :data-index="vehicle.id" />
      </a-table>
      <div class="compare-actions">
        <button class="primary-pill" type="button" @click="qsdStore.openInquiry">Request a Quote →</button>
        <RouterLink class="ghost-pill" to="/dealer">Find a Dealer</RouterLink>
      </div>
    </section>
  </QsdLayout>
</template>
