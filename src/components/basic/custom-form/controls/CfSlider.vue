<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeSlider } from '../customForm'

const props = defineProps<{ formItem: TypeSlider }>()
const model = defineModel<number | [number, number]>('value', { default: undefined })
</script>

<template>
  <ASlider
    v-model:value="model"
    :dots="props.formItem.props?.dots"
    :min="props.formItem.props?.min"
    :max="props.formItem.props?.max"
    :disabled="props.formItem.disabled"
    :range="props.formItem.props?.range"
    :step="props.formItem.props?.step"
    :tooltipPlacement="props.formItem.props?.tooltipPlacement"
    :tipFormatter="props.formItem.props?.tipFormatter"
    :marks="props.formItem.props?.marks"
    :tooltipOpen="props.formItem.props?.tooltipOpen"
    :vertical="props.formItem.props?.vertical"
  />
</template>

<style scoped lang="scss"></style>
