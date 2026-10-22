<script setup lang="ts">
import { ref } from 'vue'

import { testimonials } from '@/services/qsd/qsdData'

defineOptions({
  name: 'TestimonialSection'
})

const testimonialIndex = ref(0)
</script>

<template>
  <section class="testimonial-section page-shell">
    <div class="section-heading">
      <p class="eyebrow">CUSTOMER VOICE</p>
      <h2>What our customers say</h2>
    </div>
    <article class="testimonial-card">
      <p>"{{ testimonials[testimonialIndex].quote }}"</p>
      <strong>{{ testimonials[testimonialIndex].name }}</strong>
      <span>{{ testimonials[testimonialIndex].market }}</span>
    </article>
    <div class="dots">
      <button
        v-for="(_, index) in testimonials"
        :key="index"
        type="button"
        :class="{ active: index === testimonialIndex }"
        @click="testimonialIndex = index"
      />
    </div>
  </section>
</template>
