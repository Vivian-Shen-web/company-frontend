<script setup lang="ts">
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'BlogHero'
})
</script>

<template>
  <QsdBreadcrumb current="Blog" />
  <section class="blog-hero" :style="{ backgroundImage: `url(${asset('u1671.png')})` }">
    <div class="page-shell blog-hero__inner">
      <h1>Insights &amp; Guides</h1>
      <span class="blog-hero__rule" />
      <p>Practical knowledge for a cleaner, more efficient tomorrow.</p>
    </div>
  </section>
</template>
