<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import QsdBottomCta from '@/components/qsd/QsdBottomCta.vue'
import BlogHero from './components/BlogHero.vue'
import BlogList from './components/BlogList.vue'
import BlogSidebar from './components/BlogSidebar.vue'

defineOptions({
  name: 'QsdBlogPage'
})
</script>

<template>
  <QsdLayout>
    <BlogHero />
    <section class="blog-body page-shell">
      <BlogList />
      <BlogSidebar />
    </section>
    <QsdBottomCta title="Get expert advice and a customised solution for your market." />
  </QsdLayout>
</template>
