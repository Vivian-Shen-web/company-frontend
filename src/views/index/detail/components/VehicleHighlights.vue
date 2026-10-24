<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'
import type { VehicleModel } from '@/services/qsd/qsdData'

import 'swiper/css'
import 'swiper/css/navigation'

defineOptions({
  name: 'VehicleHighlights'
})

defineProps<{
  vehicle: VehicleModel
}>()

const qsdStore = useQsdStore()

const turntableImages = ['u461.png', 'u462.png', 'u463.png', 'u464.png', 'u465.png']
const highlightCards = [
  { icon: 'u497.svg', text: 'Driver + 3 passenger seating' },
  { icon: 'u505.svg', text: 'U hydraulic shock absorber' },
  { icon: 'u492.svg', text: '72V120Ah lithium battery' },
  { icon: 'u508.svg', text: 'Front & rear oil drum brakes' }
]
const routeFacts = [
  { icon: 'u486.svg', text: 'Driver + 3 passenger seating' },
  { icon: 'u489.svg', text: '- ≤20° climbing ability' },
  { icon: 'u490.svg', text: '220V, 60Hz charging' }
]
const swiperModules = [Navigation]
</script>

<template>
  <section class="detail-showcase page-shell">
    <Swiper class="detail-turntable" :modules="swiperModules" :navigation="true" :loop="true">
      <SwiperSlide v-for="image in turntableImages" :key="image">
        <img :src="asset(image)" :alt="vehicle.name" />
      </SwiperSlide>
    </Swiper>
    <div class="detail-highlight-panel">
      <h2>KEY HIGHLIGHTS</h2>
      <div class="detail-highlight-grid">
        <article v-for="item in highlightCards" :key="item.text">
          <span><img :src="asset(item.icon)" alt="" /></span>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="detail-route-section">
    <div class="page-shell detail-route-grid">
      <div class="detail-route-copy">
        <h2>Built for everyday<br />passenger routes</h2>
        <p>
          The {{ vehicle.name }} is built to keep your passengers moving — safely, comfortably and
          affordably. Ideal for city routes, shuttle services and community transport.
        </p>
        <button class="card-link" type="button" @click="qsdStore.openInquiry">
          Talk to fleet sales →
        </button>
      </div>
      <div class="detail-route-facts">
        <article v-for="fact in routeFacts" :key="fact.text">
          <span><img :src="asset(fact.icon)" alt="" /></span>
          <p>{{ fact.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
