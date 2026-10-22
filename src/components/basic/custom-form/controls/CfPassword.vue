<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeInputPassword } from '../customForm'

const props = defineProps<{ formItem: TypeInputPassword }>()
const model = defineModel<string>('value', { default: null })
</script>

<template>
  <AInputPassword
    v-model:value="model"
    :placeholder="props.formItem.placeholder"
    :visibilityToggle="props.formItem?.props?.visibilityToggle"
    :maxlength="props.formItem?.props?.maxLength"
    :allowClear="props.formItem?.props?.allowClear"
    :disabled="props.formItem?.disabled"
    :showCount="props.formItem?.props?.showCount"
    :prefix="props.formItem?.props?.prefix"
    :iconRender="props.formItem?.props?.iconRender"
  />
</template>

<style scoped lang="scss"></style>
