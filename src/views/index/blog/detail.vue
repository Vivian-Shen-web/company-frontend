<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import QsdBottomCta from '@/components/qsd/QsdBottomCta.vue'
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import BlogDetailHero from './components/BlogDetailHero.vue'
import BlogArticle from './components/BlogArticle.vue'
import BlogSidebar from './components/BlogSidebar.vue'

defineOptions({
  name: 'QsdBlogDetailPage'
})
</script>

<template>
  <QsdLayout>
    <QsdBreadcrumb current="Blog" />
    <BlogDetailHero />
    <section class="blog-detail-body page-shell">
      <BlogArticle />
      <BlogSidebar />
    </section>
    <QsdBottomCta title="Get expert advice and a customised solution for your market." />
  </QsdLayout>
</template>
