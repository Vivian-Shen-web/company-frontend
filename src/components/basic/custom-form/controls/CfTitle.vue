<!-- 标题 -->
<script setup lang="ts">
import type { TypeTitle } from '../customForm'

const props = defineProps<{ formItem: TypeTitle }>()
const model = defineModel<string>('value', { default: null })
</script>

<template>
  <h2 class="w-full text-center">{{ props.formItem.props?.title }}</h2>
</template>

<style scoped lang="scss"></style>
