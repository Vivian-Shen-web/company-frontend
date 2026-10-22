<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeTimepicker } from '../customForm'
import type { Dayjs } from 'dayjs'

const props = defineProps<{ formItem: TypeTimepicker }>()
const model = defineModel<string | Dayjs>('value', { default: undefined })
</script>

<template>
  <ATimePicker
    v-model:value="model"
    :placeholder="props.formItem.placeholder"
    :format="props.formItem.props?.format"
    :disabled="props.formItem?.disabled"
    :input-read-only="props.formItem.props?.inputReadOnly"
    :allowClear="props.formItem.props?.allowClear"
    :clearIcon="props.formItem.props?.clearIcon"
    :clearText="props.formItem.props?.clearText"
    :hideDisabledOptions="props.formItem.props?.hideDisabledOptions"
    :hourStep="props.formItem.props?.hourStep"
    :minuteStep="props.formItem.props?.minuteStep"
    :renderExtraFooter="props.formItem.props?.renderExtraFooter"
    :secondStep="props.formItem.props?.secondStep"
    :showNow="props.formItem.props?.showNow"
    :suffixIcon="props.formItem.props?.suffixIcon"
    :use12Hours="props.formItem.props?.use12Hours"
    :valueFormat="props.formItem.props?.valueFormat"
    :disabledHours="props.formItem.props?.disabledHours"
    :disabledMinutes="props.formItem.props?.disabledMinutes"
    :disabledSeconds="props.formItem.props?.disabledSeconds"
  />
</template>

<style scoped lang="scss"></style>
