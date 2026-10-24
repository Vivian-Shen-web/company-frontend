<script setup lang="ts">
import { vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'VehicleShowcase'
})

const qsdStore = useQsdStore()

const featuredVehicles = vehicles.slice(0, 3)
</script>

<template>
  <section class="vehicle-section page-shell">
    <div class="section-heading">
      <p class="eyebrow">THE LINEUP</p>
      <h2>Electric autos for every route</h2>
    </div>
    <div class="vehicle-grid">
      <article v-for="vehicle in featuredVehicles" :key="vehicle.id" class="vehicle-card">
        <img :src="vehicle.image" :alt="vehicle.name" />
        <h3>{{ vehicle.name }}</h3>
        <p>{{ vehicle.description }}</p>
        <div class="metrics">
          <span
            ><strong>{{ vehicle.speed }}</strong
            >Top speed</span
          >
          <span
            ><strong>{{ vehicle.range }}</strong
            >Range</span
          >
          <span
            ><strong>{{ vehicle.seats }}</strong
            >Seats</span
          >
        </div>
        <RouterLink
          class="card-link"
          :to="`/detail/${vehicle.id}`"
          @click="qsdStore.setActiveVehicle(vehicle.id)"
        >
          View details →
        </RouterLink>
      </article>
    </div>
  </section>
</template>
