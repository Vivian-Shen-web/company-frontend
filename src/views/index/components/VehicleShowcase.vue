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
const featuredVehicles = [vehicles[0], vehicles[1], vehicles[2]]
const swiperModules = [Navigation]

const tabLabels: Record<string, string> = {
  '3W Passenger': '3W Passenger',
  '3W Cargo': '3W Carco',
  '4W Passenger': '4W Passenger',
  '4W Cargo': '4W Carco'
}

const tabIconClasses: Record<string, string> = {
  '3W Passenger': 'vehicle-tab__icon--3w-passenger',
  '3W Cargo': 'vehicle-tab__icon--3w-cargo',
  '4W Passenger': 'vehicle-tab__icon--4w-passenger',
  '4W Cargo': 'vehicle-tab__icon--4w-cargo'
}

const cardTitles: Record<string, string> = {
  'sun-13': 'QSD-SUN 1+3',
  'tesla-d46': 'QSD-TESLA(D+4)',
  'joy-18': 'QSD-JOY1+8 （D+8）'
}
</script>

<template>
  <section class="vehicle-section page-shell">
    <a-tabs v-model:active-key="activeCategory" class="vehicle-tabs">
      <a-tab-pane v-for="category in categories" :key="category">
        <template #tab>
          <span class="vehicle-tab">
            <span class="vehicle-tab__icon" :class="tabIconClasses[category]" />
            {{ tabLabels[category] }}
          </span>
        </template>
      </a-tab-pane>
    </a-tabs>
    <Swiper
      class="vehicle-swiper"
      :modules="swiperModules"
      :slides-per-view="3"
      :space-between="36"
      :watch-overflow="false"
      :navigation="true"
    >
      <SwiperSlide v-for="vehicle in featuredVehicles" :key="vehicle.id">
        <article :class="['vehicle-card', `vehicle-card--${vehicle.id}`]">
          <img :src="vehicle.image" :alt="vehicle.name" />
          <h3>{{ cardTitles[vehicle.id] }}</h3>
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
            <span>View details</span><span class="arrow">→</span>
          </RouterLink>
        </article>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
