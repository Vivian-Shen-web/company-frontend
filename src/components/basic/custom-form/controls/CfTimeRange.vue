<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeTimeRangepicker } from '../customForm'
import type { Dayjs } from 'dayjs'

const props = defineProps<{ formItem: TypeTimeRangepicker }>()
const model = defineModel<[string, string] | [Dayjs, Dayjs]>('value', { default: undefined })
</script>

<template>
  <ATimeRangePicker
    v-model:value="model"
    :placeholder="props.formItem.placeholder"
    :format="props.formItem.props?.format"
    :disabled="props.formItem?.disabled"
    :input-read-only="props.formItem.props?.inputReadOnly"
    :allowClear="props.formItem.props?.allowClear"
    :clearIcon="props.formItem.props?.clearIcon"
    :clearText="props.formItem.props?.clearText"
    :hourStep="props.formItem.props?.hourStep"
    :minuteStep="props.formItem.props?.minuteStep"
    :renderExtraFooter="props.formItem.props?.renderExtraFooter"
    :secondStep="props.formItem.props?.secondStep"
    :showNow="props.formItem.props?.showNow"
    :suffixIcon="props.formItem.props?.suffixIcon"
    :use12Hours="props.formItem.props?.use12Hours"
    :valueFormat="props.formItem.props?.valueFormat"
    :order="props.formItem.props?.order"
  />
</template>

<style scoped lang="scss"></style>
