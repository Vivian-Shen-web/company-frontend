<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeDateRangepicker } from '../customForm'
import type { Dayjs } from 'dayjs'

const props = defineProps<{ formItem: TypeDateRangepicker }>()
const model = defineModel<[string, string] | [Dayjs, Dayjs]>('value', { default: [] })
</script>

<template>
  <ARangePicker
    v-model:value="model"
    :placeholder="props.formItem?.placeholder"
    :format="props.formItem.props?.format"
    :show-time="props.formItem.props?.showTime"
    :picker="props.formItem.props?.picker"
    :value-format="props.formItem.props?.valueFormat"
    :placement="props.formItem.props?.placement"
    :allow-clear="props.formItem.props?.allowClear"
    :input-read-only="props.formItem.props?.inputReadOnly"
    :separator="props.formItem.props?.separator"
    :disabled="props.formItem?.disabled"
  />
</template>

<style scoped lang="scss"></style>
