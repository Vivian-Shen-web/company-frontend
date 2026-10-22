<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeSwitch } from '../customForm'

const props = defineProps<{ formItem: TypeSwitch }>()
const model = defineModel<string | number | boolean>('value', { default: null })
</script>

<template>
  <ASwitch
    v-model:checked="model"
    :checked-children="$t(props.formItem.props.checkedLabel || ('' as string))"
    :un-checked-children="$t(props.formItem.props.uncheckedLabel || ('' as string))"
    :checked-value="
      props.formItem.props.checkedValue == undefined ? true : props.formItem.props.checkedValue
    "
    :un-checked-value="
      props.formItem.props.uncheckedValue == undefined ? false : props.formItem.props.uncheckedValue
    "
    :disabled="props.formItem?.disabled"
    :loading="props.formItem.props?.loading"
    :size="props.formItem.props?.size"
  />
</template>

<style scoped lang="scss"></style>
