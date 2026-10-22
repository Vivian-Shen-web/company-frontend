<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeTextarea } from '../customForm'

const props = defineProps<{ formItem: TypeTextarea }>()
const model = defineModel<string>('value', { default: null })
</script>

<template>
  <ATextarea
    v-model:value="model"
    :placeholder="props.formItem.placeholder"
    :maxlength="props.formItem.props?.maxLength"
    :disabled="props.formItem?.disabled"
    :showCount="props.formItem.props?.showCount"
    :allowClear="props.formItem.props?.allowClear"
    :autoSize="props.formItem.props?.autoSize"
  />
</template>

<style scoped lang="scss"></style>
