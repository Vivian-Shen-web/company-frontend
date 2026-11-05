<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'SuccessStories'
})

const stories = [
  {
    title: 'Nepal · Community Mobility',
    description: 'Serving local communities with reliable and affordable passenger transport.',
    image: asset('u5.png')
  },
  {
    title: 'India · Urban Shuttle Project',
    description:
      'Delivered a fleet of QSD SUN1+3 for a local transport operator, improving last-mile connectivity and cost efficiency.',
    image: asset('u13.png')
  },
  {
    title: 'Bangladesh · Campus Transport',
    description:
      'Used for campus and industrial park shuttle services, providing safe, quiet and cost-effective mobility.',
    image: asset('u463.png')
  }
]
</script>

<template>
  <section class="detail-stories">
    <div class="page-shell">
      <h2 class="detail-section-title">Success Stories</h2>
      <p class="detail-section-subtitle">
        Real deployments, real impact. See how QSD vehicles create value for our customers in
        different markets.
      </p>
      <div class="stories-grid">
        <article v-for="story in stories" :key="story.title" class="story-card">
          <img :src="story.image" :alt="story.title" />
          <div class="story-card__body">
            <h3>{{ story.title }}</h3>
            <p>{{ story.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
