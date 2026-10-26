<script setup lang="ts">
import { computed } from 'vue'
import { DownloadOutlined } from '@ant-design/icons-vue'

import type { VehicleModel } from '@/services/qsd/qsdData'

defineOptions({
  name: 'VehicleSpecs'
})

const props = defineProps<{
  vehicle: VehicleModel
}>()

const specRows = computed(() => {
  return {
    ...props.vehicle.specs,
    'Charge Voltage': '220V, 60Hz'
  }
})
</script>

<template>
  <section class="spec-section page-shell">
    <div class="detail-spec-card">
      <h2>TECHNICAL SPECIFICATIONS</h2>
      <div class="spec-grid">
        <div v-for="(value, label) in specRows" :key="label" class="spec-row">
          <span>{{ label }}</span>
          <strong>{{ value }}</strong>
        </div>
      </div>
      <button class="detail-download" type="button">Download Brochure <DownloadOutlined /></button>
    </div>
  </section>
</template>
