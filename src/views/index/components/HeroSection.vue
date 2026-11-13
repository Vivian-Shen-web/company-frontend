<script setup lang="ts">
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { useQsdStore } from '@/stores/modules/qsd'
import { asset } from '@/services/qsd/qsdData'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

defineOptions({
  name: 'HeroSection'
})

const qsdStore = useQsdStore()

type HeroSlide = {
  image: string
  motion?: string
  overlayMotion?: string
  overlayPoster?: string
  eyebrow?: string
  title?: string
  accent?: string
  copy?: string
  className: string
}

const heroSlides: HeroSlide[] = [
  {
    image: asset('u5.png'),
    overlayMotion: asset('u6-hero-overlay.webp'),
    overlayPoster: asset('u6-hero-overlay-poster.jpg'),
    className: 'hero-slide--visual'
  },
  {
    image: asset('u8-hero-slide-poster.jpg'),
    motion: asset('u8-hero-slide.webp'),
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

// 动效降级：移动端、省流量/慢网、系统开启“减弱动态效果”时只给静帧，避免首屏下载 11MB 动图
const allowMotion = (() => {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (window.matchMedia('(max-width: 767px)').matches) return false
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string }
    }
  ).connection
  if (connection?.saveData) return false
  if (connection?.effectiveType && ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) {
    return false
  }
  return true
})()

const swiperModules = [Autoplay, EffectFade, Navigation]

const exploreVehicles = () => {
  document.querySelector('#vehicles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
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
      :navigation="true"
    >
      <SwiperSlide v-for="slide in heroSlides" :key="slide.image" :class="slide.className">
        <picture v-if="slide.motion">
          <source v-if="allowMotion" :srcset="slide.motion" type="image/webp" />
          <img class="hero-bg" :src="slide.image" alt="" />
        </picture>
        <img v-else class="hero-bg" :src="slide.image" alt="" />
        <picture v-if="slide.overlayMotion">
          <source v-if="allowMotion" :srcset="slide.overlayMotion" type="image/webp" />
          <img class="hero-bg hero-bg--overlay" :src="slide.overlayPoster" alt="" />
        </picture>
        <div v-if="slide.eyebrow" class="hero-content">
          <p class="eyebrow">{{ slide.eyebrow }}</p>
          <h1 v-if="slide.title">{{ slide.title }}</h1>
          <h2>{{ slide.accent }}</h2>
          <p class="hero-copy">{{ slide.copy }}</p>
          <div v-if="slide.title" class="hero-actions">
            <a class="primary-pill" href="#vehicles" @click.prevent="exploreVehicles"
              >Explore Vehicles</a
            >
            <button class="ghost-pill ghost-pill--light" type="button">
              Download Brochure
              <img class="pill-icon" :src="asset('u24.svg')" alt="" />
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <button class="sr-only" type="button" @click="qsdStore.openInquiry">Request a quote</button>
  </section>
</template>
