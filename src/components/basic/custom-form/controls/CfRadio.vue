<!-- 文件描述 -->
<script setup lang="ts">
import type { RadioGroupChildOption } from 'ant-design-vue/es/radio/Group'
import type { TypeRadio } from '../customForm'
import { computed } from 'vue'
import { ref } from 'vue'

const props = defineProps<{ formItem: TypeRadio }>()
const model = defineModel<string>('value', { default: null })

const renderOptions = ref<RadioGroupChildOption[]>()

const render = () => {
  if (!props.formItem.props) {
    return []
  }
  if (props.formItem.props.renderOptions) {
    props.formItem.props.renderOptions().then(
      (options) => {
        renderOptions.value = options as RadioGroupChildOption[]
      },
      () => {
        renderOptions.value = []
      }
    )
  } else {
    renderOptions.value = props.formItem.props.options as RadioGroupChildOption[]
  }
}
render()
</script>

<template>
  <ARadioGroup
    v-model:value="model"
    :options="renderOptions"
    :button-style="props.formItem.props?.buttonStyle"
    :size="props.formItem.props?.size"
    :option-type="props.formItem.props?.optionType"
  >
  </ARadioGroup>
</template>

<style scoped lang="scss"></style>
