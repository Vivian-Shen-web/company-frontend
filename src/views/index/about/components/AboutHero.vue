<script setup lang="ts">
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'AboutHero'
})
</script>

<template>
  <QsdBreadcrumb current="About us" />
  <section class="about-hero">
    <img :src="asset('u1512.png')" alt="About us" />
  </section>
</template>
