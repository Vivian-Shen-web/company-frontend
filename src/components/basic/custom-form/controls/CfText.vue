<!-- 文件描述 -->
<script setup lang="ts">
import type { CustomFormItem, TypeText } from '../customForm'

const props = defineProps<{ formItem: TypeText }>()
const model = defineModel<string>({ default: null })
</script>

<template>
  <span>
    {{ props.formItem.props?.content ? props.formItem.props?.content : props.formItem.placeholder }}
  </span>
</template>

<style scoped lang="scss"></style>
