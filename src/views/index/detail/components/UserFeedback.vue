<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'UserFeedback'
})

const feedbacks = [
  {
    quote:
      'The SUN1+3 is very practical for our daily routes. It’s comfortable, easy to drive and the running cost is low.',
    name: 'Mr. Sharma',
    role: 'Fleet Owner, India',
    avatar: 'avatar-1.png'
  },
  {
    quote:
      'Our passengers like the smooth and quiet ride. The build quality is solid and the battery range meets our needs.',
    name: 'Ms. Rahman',
    role: 'Transport Operator, Bangladesh',
    avatar: 'avatar-2.png'
  },
  {
    quote:
      'Reliable, efficient and easy to maintain. It’s a great choice for community passenger service.',
    name: 'Mr. Karki',
    role: 'Operator, Nepal',
    avatar: 'avatar-3.png'
  }
]
</script>

<template>
  <section class="detail-feedback">
    <div class="page-shell">
      <h2 class="detail-section-title">User Feedback</h2>
      <p class="detail-section-subtitle">Hear what our customers say about the QSD-SUN1+3.</p>
      <div class="feedback-grid">
        <article v-for="feedback in feedbacks" :key="feedback.name" class="feedback-card">
          <div class="feedback-card__top">
            <span class="feedback-card__quote">“</span>
            <span class="feedback-card__stars">★★★★★</span>
          </div>
          <p class="feedback-card__text">{{ feedback.quote }}</p>
          <div class="feedback-card__person">
            <img class="feedback-card__avatar" :src="asset(feedback.avatar)" :alt="feedback.name" />
            <div>
              <strong>{{ feedback.name }}</strong>
              <span>{{ feedback.role }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
