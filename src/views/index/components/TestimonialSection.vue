<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { asset, testimonials } from '@/services/qsd/qsdData'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

defineOptions({
  name: 'TestimonialSection'
})

const testimonialAvatars = [asset('u308.png'), asset('u312.png'), asset('u319.png')]
const swiperModules = [Autoplay, Navigation, Pagination]
</script>

<template>
  <section class="testimonial-section">
    <div class="page-shell">
      <h2>What our customers say</h2>
      <Swiper
        class="testimonial-swiper"
        :modules="swiperModules"
        :loop="true"
        :initial-slide="2"
        :speed="500"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :navigation="true"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="testimonial.name">
          <article class="testimonial-card">
            <p>"{{ testimonial.quote }}"</p>
            <img :src="testimonialAvatars[index]" :alt="testimonial.name" />
            <strong>{{ testimonial.name }}</strong>
            <span>{{ testimonial.market }}</span>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
