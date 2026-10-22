<!-- 文件描述 -->
<script setup lang="ts">
// import type { TypeImageUpload } from '../customForm'

// const props = defineProps<{ formItem: TypeImageUpload }>()
const model = defineModel<string>({ default: null })
</script>

<template>
  <ImageUpload v-model:value="model"></ImageUpload>
</template>

<style scoped lang="scss"></style>
