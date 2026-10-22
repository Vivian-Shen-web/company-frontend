<script setup lang="ts">
defineOptions({
  name: 'LocatorPage'
})

defineProps<{
  title: string
  current: string
}>()
</script>

<template>
  <section class="locator-page">
    <div class="page-shell locator-card">
      <p class="breadcrumb"><RouterLink to="/">Home</RouterLink> ＞ {{ current }}</p>
      <h1>{{ title }}</h1>
      <p>Search India network partners for sales, test rides and after-sales service.</p>
      <div class="locator-search">
        <a-input size="large" placeholder="City / state / pin code" />
        <button class="primary-pill" type="button">Search</button>
      </div>
    </div>
  </section>
</template>
