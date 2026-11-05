<script setup lang="ts">
import { ArrowRightOutlined } from '@ant-design/icons-vue'

import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'BlogList'
})

const posts = [
  {
    title: 'Electric Tricycle Type Approval and Market Access Guide for Importers',
    excerpt:
      'An electric tricycle that cannot clear customs or complete local registration cannot generate revenue, even if its technical specification is...',
    tag: 'TYPE APPROVAL',
    date: 'October 29, 2026',
    image: asset('blog-1.png')
  },
  {
    title: 'Electric Tricycle Telematics and IoT Integration Guide',
    excerpt:
      'How fleet operators can use telematics, GPS tracking and battery monitoring to improve utilisation and reduce downtime.',
    tag: 'TELEMATICS',
    date: 'October 22, 2026',
    image: asset('blog-2.png')
  },
  {
    title: 'Electric Tricycle Charging at Home and Workplace Guide',
    excerpt:
      'Practical charging setup, safety requirements and scheduling advice for passenger and cargo electric tricycles.',
    tag: 'CHARGING',
    date: 'October 15, 2026',
    image: asset('blog-3.png')
  },
  {
    title: 'Electric Tricycle Load Capacity: How to Set a Safe Working Limit',
    excerpt:
      'Understand payload ratings, axle limits and road conditions before setting daily operating loads for your fleet.',
    tag: 'OPERATIONS',
    date: 'October 8, 2026',
    image: asset('blog-4.png')
  },
  {
    title: 'How to Choose the Right Electric Tricycle for Urban Passenger Transport',
    excerpt:
      'A practical checklist covering range, seating layout, cabin comfort and after-sales support for city operations.',
    tag: 'BUYER GUIDE',
    date: 'September 30, 2026',
    image: asset('blog-5.png')
  },
  {
    title: 'Spare Parts and After-Sales Planning for Importers',
    excerpt:
      'Plan your initial spare-parts kit, warehouse stock and technical training to keep vehicles on the road.',
    tag: 'AFTER-SALES',
    date: 'September 22, 2026',
    image: asset('blog-6.png')
  },
  {
    title: 'Battery Thermal Management: Keeping Packs Safe in Hot Climates',
    excerpt:
      'Cooling strategies, charging habits and storage practices that protect lithium packs in high-temperature markets.',
    tag: 'BATTERY',
    date: 'September 15, 2026',
    image: asset('blog-7.png')
  },
  {
    title: 'Export Packaging and Container Loading Guide for Electric Tricycles',
    excerpt:
      'Packaging standards, loading patterns and documentation checks that reduce damage and demurrage at destination.',
    tag: 'LOGISTICS',
    date: 'September 8, 2026',
    image: asset('u1618.png')
  }
]
</script>

<template>
  <div class="blog-main">
    <div class="blog-grid">
      <article v-for="post in posts" :key="post.title" class="blog-card">
        <img :src="post.image" :alt="post.title" loading="lazy" />
        <div class="blog-card__body">
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <div class="blog-card__meta">
            <span class="blog-card__tag">{{ post.tag }}</span>
            <span>{{ post.date }}</span>
          </div>
          <span class="blog-card__more">Read More <ArrowRightOutlined /></span>
        </div>
      </article>
    </div>
    <div class="blog-pagination">
      <span class="is-active">1</span>
      <span>2</span>
      <span class="blog-pagination__next"><ArrowRightOutlined /></span>
    </div>
  </div>
</template>
