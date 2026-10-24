<script setup lang="ts">
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { useQsdStore } from '@/stores/modules/qsd'
import { asset } from '@/services/qsd/qsdData'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

defineOptions({
  name: 'HeroSection'
})

const qsdStore = useQsdStore()

const heroSlides = [
  {
    image: asset('u5.png'),
    overlay: asset('u6.png'),
    className: 'hero-slide--visual'
  },
  {
    image: asset('u8.png'),
    eyebrow: 'QSD ELECTRIC AUTOS -- INDIA',
    title: '',
    accent: 'BUILT FOR TOMORROW.',
    copy: 'L5-category high-speed electric three-wheelers for passenger and cargo fleets .',
    className: 'hero-slide--center'
  },
  {
    image: asset('u13.png'),
    eyebrow: 'QSD ELECTRIC AUTOS -- INDIA',
    title: "ENGINEERED FOR\nINDIA'S ROADS.",
    accent: 'BUILT FOR TOMORROW.',
    copy: 'L5-category high-speed electric three-wheelers for passenger and cargo fleets - lower running cost, longer range, built for real Indian roads.',
    className: 'hero-slide--copy'
  }
]

const swiperModules = [Autoplay, EffectFade, Pagination]
</script>

<template>
  <section class="hero-section">
    <Swiper
      class="hero-swiper"
      :modules="swiperModules"
      effect="fade"
      :loop="true"
      :speed="500"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="slide in heroSlides" :key="slide.image" :class="slide.className">
        <img class="hero-bg" :src="slide.image" alt="" />
        <img v-if="slide.overlay" class="hero-bg hero-bg--overlay" :src="slide.overlay" alt="" />
        <div v-if="slide.eyebrow" class="hero-content">
          <p class="eyebrow">{{ slide.eyebrow }}</p>
          <h1 v-if="slide.title">{{ slide.title }}</h1>
          <h2>{{ slide.accent }}</h2>
          <p class="hero-copy">{{ slide.copy }}</p>
          <div v-if="slide.title" class="hero-actions">
            <RouterLink class="primary-pill" to="/vehicles">Explore Vehicles</RouterLink>
            <button class="ghost-pill ghost-pill--light" type="button">Download Brochure</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <button class="sr-only" type="button" @click="qsdStore.openInquiry">Request a quote</button>
  </section>
</template>
