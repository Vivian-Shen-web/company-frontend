<script setup lang="ts">
import { computed, ref } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { asset, categories, vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

import 'swiper/css'
import 'swiper/css/navigation'

defineOptions({
  name: 'VehicleShowcase'
})

const qsdStore = useQsdStore()

const activeCategory = ref('3W Passenger')
const swiperModules = [Navigation]

const tabLabels: Record<string, string> = {
  '3W Passenger': '3W Passenger',
  '3W Cargo': '3W Cargo',
  '4W Passenger': '4W Passenger',
  '4W Cargo': '4W Cargo',
  '2W Electric': '2W Electric'
}

const tabIconClasses: Record<string, string> = {
  '3W Passenger': 'vehicle-tab__icon--3w-passenger',
  '3W Cargo': 'vehicle-tab__icon--3w-cargo',
  '4W Passenger': 'vehicle-tab__icon--4w-passenger',
  '4W Cargo': 'vehicle-tab__icon--4w-cargo',
  '2W Electric': 'vehicle-tab__icon--2w'
}

const cardTitles: Record<string, string> = {
  'sun-13': 'QSD-SUN 1+3',
  'tesla-d46': 'QSD-MINI SUN(D+4)',
  'joy-18': 'QSD-JOY 1+3',
  e1: 'QSD-E1'
}

const categoryImages: Record<string, string[]> = {
  '3W Passenger': [asset('u77.png'), asset('u81.png'), asset('u82.png')],
  '3W Cargo': [asset('u201.png'), asset('u217.png'), asset('u233.png')],
  '4W Passenger': [asset('u77.png'), asset('u81.png'), asset('u82.png')],
  '4W Cargo': [asset('u201.png'), asset('u217.png'), asset('u233.png')],
  '2W Electric': [asset('qsd-2w.png')]
}

const imageMode = computed(() =>
  activeCategory.value === '3W Cargo' ||
  activeCategory.value === '4W Cargo' ||
  activeCategory.value === '2W Electric'
    ? 'cargo'
    : 'passenger'
)

const carouselVehicles = computed(() => {
  const matched = vehicles.filter((vehicle) => vehicle.category === activeCategory.value)
  const base = matched.length
    ? matched
    : vehicles.filter((vehicle) => vehicle.category === '3W Passenger')
  const images = categoryImages[activeCategory.value] ?? base.map((vehicle) => vehicle.image)
  const repeated = base.length < 2 ? [...base, ...base, ...base] : [...base, ...base]
  return repeated.map((vehicle, index) => ({
    ...vehicle,
    image: images[index % images.length]
  }))
})
</script>

<template>
  <section id="vehicles" class="vehicle-section page-shell">
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
    <div class="vehicle-carousel">
      <Swiper
        class="vehicle-swiper"
        :modules="swiperModules"
        :slides-per-view="3"
        :space-between="36"
        :loop="true"
        :watch-overflow="false"
        :navigation="{ prevEl: '.vehicle-nav--prev', nextEl: '.vehicle-nav--next' }"
      >
        <SwiperSlide v-for="(vehicle, index) in carouselVehicles" :key="`${vehicle.id}-${index}`">
          <article
            :class="['vehicle-card', `vehicle-card--${vehicle.id}`, `vehicle-card--${imageMode}`]"
          >
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
      <button class="vehicle-nav vehicle-nav--prev" type="button" aria-label="Previous" />
      <button class="vehicle-nav vehicle-nav--next" type="button" aria-label="Next" />
    </div>
  </section>
</template>
