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
const relatedVehicles = [...vehicles, ...vehicles]
const swiperModules = [Navigation]
</script>

<template>
  <section class="detail-related">
    <div class="page-shell">
      <h2>Built for everyday passenger routes</h2>
      <div class="detail-related-carousel">
        <Swiper
          class="detail-related-swiper"
          :modules="swiperModules"
          :slides-per-view="3"
          :space-between="36"
          :loop="true"
          :navigation="{
            prevEl: '.detail-related-nav--prev',
            nextEl: '.detail-related-nav--next'
          }"
        >
          <SwiperSlide v-for="(vehicle, index) in relatedVehicles" :key="`${vehicle.id}-${index}`">
            <article :class="['vehicle-card', `vehicle-card--${vehicle.id}`]">
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
        <button
          class="detail-related-nav detail-related-nav--prev"
          type="button"
          aria-label="Previous"
        />
        <button
          class="detail-related-nav detail-related-nav--next"
          type="button"
          aria-label="Next"
        />
      </div>
    </div>
  </section>
</template>
