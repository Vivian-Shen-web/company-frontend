<script setup lang="ts">
defineOptions({
  name: 'UserFeedback'
})

const feedbacks = [
  {
    quote:
      'The SUN1+3 is very practical for our daily routes. It’s comfortable, easy to drive and the running cost is low.',
    name: 'Mr. Sharma',
    role: 'Fleet Owner, India',
    initials: 'MS'
  },
  {
    quote:
      'Our passengers like the smooth and quiet ride. The build quality is solid and the battery range meets our needs.',
    name: 'Ms. Rahman',
    role: 'Transport Operator, Bangladesh',
    initials: 'MR'
  },
  {
    quote:
      'Reliable, efficient and easy to maintain. It’s a great choice for community passenger service.',
    name: 'Mr. Karki',
    role: 'Operator, Nepal',
    initials: 'MK'
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
            <span class="feedback-card__avatar">{{ feedback.initials }}</span>
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
