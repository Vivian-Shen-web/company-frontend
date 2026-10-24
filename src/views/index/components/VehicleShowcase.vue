<script setup lang="ts">
import { ref } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { categories, vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

import 'swiper/css'
import 'swiper/css/navigation'

defineOptions({
  name: 'VehicleShowcase'
})

const qsdStore = useQsdStore()

const activeCategory = ref('3W Passenger')
const featuredVehicles = [vehicles[1], vehicles[2], vehicles[0]]
const swiperModules = [Navigation]
</script>

<template>
  <section class="vehicle-section page-shell">
    <a-tabs v-model:active-key="activeCategory" class="vehicle-tabs">
      <a-tab-pane v-for="category in categories" :key="category">
        <template #tab>
          <span class="vehicle-tab">
            <span class="vehicle-tab__icon" />
            {{ category }}
          </span>
        </template>
      </a-tab-pane>
    </a-tabs>
    <Swiper
      class="vehicle-swiper"
      :modules="swiperModules"
      :slides-per-view="3"
      :space-between="42"
      :navigation="true"
    >
      <SwiperSlide v-for="vehicle in featuredVehicles" :key="vehicle.id">
        <article class="vehicle-card">
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
      </SwiperSlide>
    </Swiper>
  </section>
</template>
