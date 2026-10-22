<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeDatepicker } from '../customForm'
import type { Dayjs } from 'dayjs'

const props = defineProps<{ formItem: TypeDatepicker }>()
const model = defineModel<string | Dayjs>('value', { default: undefined })
</script>

<template>
  <ADatePicker
    v-model:value="model"
    :placeholder="props.formItem.placeholder"
    :format="props.formItem.props?.format"
    :disabled="props.formItem?.disabled"
    :show-time="props.formItem.props?.showTime"
    :picker="props.formItem.props?.picker"
    :value-format="props.formItem.props?.valueFormat"
    :placement="props.formItem.props?.placement"
    :allow-clear="props.formItem.props?.allowClear"
    :input-read-only="props.formItem.props?.inputReadOnly"
  />
</template>

<style scoped lang="scss"></style>
