<!-- 文件描述 -->
<script setup lang="ts">
import type { TypeCheckbox } from '../customForm'
import { computed } from 'vue'
import { ref } from 'vue'
import type { CheckboxOptionType } from 'ant-design-vue'

const props = defineProps<{ formItem: TypeCheckbox }>()
const model = defineModel<[]>('value', { default: [] })

const renderOptions = ref<CheckboxOptionType[]>()

const render = () => {
  if (!props.formItem.props) {
    return []
  }
  if (props.formItem.props.renderOptions) {
    props.formItem.props.renderOptions().then(
      (options) => {
        renderOptions.value = options as CheckboxOptionType[]
      },
      () => {
        renderOptions.value = []
      }
    )
  } else {
    renderOptions.value = props.formItem.props.options as CheckboxOptionType[]
  }
}
render()
</script>

<template>
  <ACheckboxGroup
    v-model:value="model"
    :options="renderOptions"
    :disabled="props.formItem?.disabled"
  />
</template>

<style scoped lang="scss"></style>
