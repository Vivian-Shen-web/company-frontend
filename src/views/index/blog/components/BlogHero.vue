<script setup lang="ts">
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'BlogHero'
})
</script>

<template>
  <QsdBreadcrumb current="Blog" />
  <section class="blog-hero">
    <img :src="asset('u1678.png')" alt="Insights &amp; Guides" />
  </section>
</template>
