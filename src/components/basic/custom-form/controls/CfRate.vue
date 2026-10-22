<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeRate } from '../customForm'

const props = defineProps<{ formItem: TypeRate }>()
const model = defineModel<number>('value', { default: undefined })
</script>

<template>
  <ARate
    v-model:value="model"
    :disabled="props.formItem?.disabled"
    :allowClear="props.formItem.props?.allowClear"
    :allowHalf="props.formItem.props?.allowHalf"
    :character="props.formItem.props?.character"
    :count="props.formItem.props?.count"
    :tooltips="props.formItem.props?.tooltips"
  />
</template>

<style scoped lang="scss"></style>
