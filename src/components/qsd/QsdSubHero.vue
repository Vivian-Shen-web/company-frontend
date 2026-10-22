<script setup lang="ts">
defineOptions({
  name: 'QsdSubHero'
})

defineProps<{
  title: string
  subtitle?: string
  current: string
}>()
</script>

<template>
  <section class="sub-hero">
    <div class="page-shell">
      <p class="breadcrumb"><RouterLink to="/">Home</RouterLink> ＞ {{ current }}</p>
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>
