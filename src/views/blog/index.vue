<script setup lang="ts">
import { ArrowRightOutlined } from '@ant-design/icons-vue'

import QsdLayout from '@/components/qsd/QsdLayout.vue'
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import QsdBottomCta from '@/components/qsd/QsdBottomCta.vue'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'QsdBlogPage'
})

const posts = [
  {
    title: 'Electric Tricycle Type Approval and Market Access Guide for Importers',
    excerpt:
      'An electric tricycle that cannot clear customs or complete local registration cannot generate revenue, even if its technical specification is...',
    tag: 'TYPE APPROVAL',
    date: 'October 29, 2026',
    image: asset('u461.png')
  },
  {
    title: 'Electric Tricycle Telematics and IoT Integration Guide',
    excerpt:
      'How fleet operators can use telematics, GPS tracking and battery monitoring to improve utilisation and reduce downtime.',
    tag: 'TELEMATICS',
    date: 'October 22, 2026',
    image: asset('u462.png')
  },
  {
    title: 'Electric Tricycle Charging at Home and Workplace Guide',
    excerpt:
      'Practical charging setup, safety requirements and scheduling advice for passenger and cargo electric tricycles.',
    tag: 'CHARGING',
    date: 'October 15, 2026',
    image: asset('u463.png')
  },
  {
    title: 'Electric Tricycle Load Capacity: How to Set a Safe Working Limit',
    excerpt:
      'Understand payload ratings, axle limits and road conditions before setting daily operating loads for your fleet.',
    tag: 'OPERATIONS',
    date: 'October 8, 2026',
    image: asset('u464.png')
  },
  {
    title: 'How to Choose the Right Electric Tricycle for Urban Passenger Transport',
    excerpt:
      'A practical checklist covering range, seating layout, cabin comfort and after-sales support for city operations.',
    tag: 'BUYER GUIDE',
    date: 'September 30, 2026',
    image: asset('u465.png')
  },
  {
    title: 'Spare Parts and After-Sales Planning for Importers',
    excerpt:
      'Plan your initial spare-parts kit, warehouse stock and technical training to keep vehicles on the road.',
    tag: 'AFTER-SALES',
    date: 'September 22, 2026',
    image: asset('u516.png')
  }
]

const popularPosts = [
  'Electric Tricycle Telematics and IoT Integration Guide.',
  'Electric Tricycle Charging at Home and Workplace Guide.',
  'Electric Tricycle Load Capacity: How to Set a Safe Working Limit.'
]
</script>

<template>
  <QsdLayout>
    <QsdBreadcrumb current="Blog" />
    <section class="blog-hero">
      <div class="page-shell">
        <p class="eyebrow">INSIGHTS &amp; GUIDES</p>
        <h1>Insights &amp; Guides</h1>
        <p>Practical knowledge for a cleaner, more efficient tomorrow.</p>
      </div>
    </section>

    <section class="blog-body page-shell">
      <div class="blog-main">
        <article v-for="post in posts" :key="post.title" class="blog-card">
          <img :src="post.image" :alt="post.title" />
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
        <div class="blog-pagination">
          <span class="is-active">1</span>
          <span>2</span>
          <ArrowRightOutlined />
        </div>
      </div>

      <aside class="blog-side">
        <div class="blog-side__card">
          <h3>POPULAR POSTS</h3>
          <ol>
            <li v-for="(post, index) in popularPosts" :key="post">
              <span>{{ index + 1 }}</span>
              {{ post }}
            </li>
          </ol>
        </div>
        <div class="blog-side__card blog-newsletter">
          <h3>NEWSLETTER</h3>
          <p>Get the latest insights and updates from QSD.</p>
          <input type="email" placeholder="Your email address" />
          <button type="button">
            Subscribe
            <ArrowRightOutlined />
          </button>
        </div>
        <div class="blog-side__card blog-contact">
          <h3>Contact Us</h3>
          <p>Get expert advice on model selection, customisation and fleet solutions.</p>
          <RouterLink to="/contact">Contact Us <ArrowRightOutlined /></RouterLink>
        </div>
      </aside>
    </section>

    <QsdBottomCta title="Get expert advice and a customised solution for your market." />
  </QsdLayout>
</template>
