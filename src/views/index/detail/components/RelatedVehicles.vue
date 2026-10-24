<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

import 'swiper/css'
import 'swiper/css/navigation'

defineOptions({
  name: 'RelatedVehicles'
})

const qsdStore = useQsdStore()
const swiperModules = [Navigation]
</script>

<template>
  <section class="detail-related page-shell">
    <h2>Built for everyday passenger routes</h2>
    <Swiper
      class="detail-related-swiper"
      :modules="swiperModules"
      :slides-per-view="3"
      :space-between="48"
      :navigation="true"
    >
      <SwiperSlide v-for="vehicle in vehicles" :key="vehicle.id">
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
