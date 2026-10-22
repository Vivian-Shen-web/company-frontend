<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useQsdStore } from '@/stores/modules/qsd'
import type { VehicleModel } from '@/services/qsd/qsdData'

defineOptions({
  name: 'VehicleCard'
})

const props = defineProps<{
  vehicle: VehicleModel
  compact?: boolean
  showCompare?: boolean
}>()

const router = useRouter()
const qsdStore = useQsdStore()

const goDetail = () => {
  qsdStore.setActiveVehicle(props.vehicle.id)
  router.push(`/detail/${props.vehicle.id}`)
}
</script>

<template>
  <article class="vehicle-card" :class="{ 'vehicle-card--compact': compact }">
    <img :src="vehicle.image" :alt="vehicle.name" />
    <span v-if="compact" class="tag">{{ vehicle.category.replace('3W ', '') }}</span>
    <h3>{{ vehicle.name }}</h3>
    <p>{{ vehicle.description }}</p>
    <div class="metrics">
      <span><strong>{{ vehicle.speed }}</strong>Top speed</span>
      <span><strong>{{ vehicle.range }}</strong>Range</span>
      <span><strong>{{ vehicle.seats }}</strong>Seats</span>
    </div>
    <div v-if="showCompare" class="card-actions">
      <button type="button" @click="goDetail">View details</button>
      <a-checkbox checked>Add to compare</a-checkbox>
    </div>
    <button v-else class="card-link" type="button" @click="goDetail">View details →</button>
  </article>
</template>
