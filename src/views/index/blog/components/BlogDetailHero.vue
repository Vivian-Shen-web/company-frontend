<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'BlogDetailHero'
})

const heroStyle = {
  backgroundImage: `url(${asset('blog-detail-hero.png')})`
}
</script>

<template>
  <section class="blog-detail-hero" :style="heroStyle">
    <div class="page-shell blog-detail-hero__inner">
      <span class="blog-detail-hero__rule" />
      <h1>Electric Tricycle Type Approval and Market Access Guide for Importers</h1>
      <p>September 30, 2026 / By kavinhou</p>
    </div>
  </section>
</template>
