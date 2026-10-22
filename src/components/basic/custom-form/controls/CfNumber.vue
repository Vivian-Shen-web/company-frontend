<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeNumber } from '../customForm'

const props = defineProps<{ formItem: TypeNumber }>()
const model = defineModel<number>('value', { default: null })
</script>

<template>
  <AInputNumber
    v-model:value="model"
    :max="props.formItem.props?.max"
    :min="props.formItem.props?.min"
    :step="props.formItem.props?.step"
    :precision="props.formItem.props?.precision"
    :disabled="props.formItem?.disabled"
    :addonAfter="props.formItem.props?.addonAfter"
    :addonBefore="props.formItem.props?.addonBefore"
    :prefix="props.formItem.props?.prefix"
    :controls="props.formItem.props?.controls"
  />
</template>

<style scoped lang="scss"></style>
