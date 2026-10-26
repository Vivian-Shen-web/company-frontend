<script setup lang="ts">
defineOptions({
  name: 'QsdBreadcrumb'
})

defineProps<{
  current: string
}>()
</script>

<template>
  <div class="qsd-breadcrumb page-shell">
    <RouterLink to="/">Home</RouterLink>
    <span>＞ {{ current }}</span>
  </div>
</template>
