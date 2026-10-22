<!-- 分隔线 -->
<script setup lang="ts">
import type { TypeDivider } from '../customForm'

const props = defineProps<{ formItem: TypeDivider }>()
const model = defineModel<string>('value', { default: null })
</script>

<template>
  <ADivider
    :id="props.formItem.props?.title"
    v-model:value="model"
    :dashed="props.formItem.props?.dashed"
    :orientation="props.formItem.props?.orientation"
  >
    {{ props.formItem.props?.title }}
  </ADivider>
</template>

<style scoped lang="scss"></style>
