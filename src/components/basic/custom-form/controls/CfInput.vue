<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeInput } from '../customForm'

const props = defineProps<{ formItem: TypeInput }>()
const model = defineModel<string>('value', { default: null })
</script>

<template>
  <AInput
    v-model:value="model"
    :placeholder="props.formItem.placeholder"
    :maxlength="props.formItem.props?.maxLength"
    :disabled="props.formItem?.disabled"
    :showCount="props.formItem.props?.showCount"
    :allowClear="props.formItem.props?.allowClear"
    :prefix="props.formItem.props?.prefix"
    :suffix="props.formItem.props?.suffix"
  />
</template>

<style scoped lang="scss"></style>
