<script setup lang="ts">
import type { VehicleModel } from '../data/qsdData'

defineOptions({
  name: 'VehicleSpecs'
})

defineProps<{
  vehicle: VehicleModel
}>()
</script>

<template>
  <section class="spec-section page-shell">
    <p class="eyebrow">TECHNICAL SPECIFICATIONS</p>
    <div class="spec-grid">
      <div v-for="(value, label) in vehicle.specs" :key="label" class="spec-row">
        <span>{{ label }}</span>
        <strong>{{ value }}</strong>
      </div>
    </div>
  </section>
</template>
