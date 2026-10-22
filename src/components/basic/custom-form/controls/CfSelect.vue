<!-- 文件描述 -->
<script setup lang="ts">
import type { DefaultOptionType, SelectValue } from 'ant-design-vue/es/select'
import type { TypeSelect } from '../customForm'
import { computed } from 'vue'
import { ref, watch } from 'vue'
import { reactive } from 'vue'

const props = defineProps<{ formItem: TypeSelect }>()
const model = defineModel<SelectValue>('value', { default: undefined })

const renderOptions = ref<DefaultOptionType[]>()

const render = () => {
  if (!props.formItem.props) {
    return []
  }
  if (props.formItem.props.renderOptions) {
    props.formItem.props.renderOptions().then(
      (options) => {
        renderOptions.value = options as DefaultOptionType[]
      },
      () => {
        renderOptions.value = []
      }
    )
  } else {
    renderOptions.value = props.formItem.props.options as DefaultOptionType[]
  }
}
render()
const select = ref()
</script>

<template>
  <ASelect
    ref="select"
    :show-search="props.formItem.props.showSearch"
    optionFilterProp="label"
    v-model:value="model"
    @focus="render()"
    :options="renderOptions"
    :placement="props.formItem.props?.placement"
    :placeholder="props.formItem.placeholder"
    :disabled="props.formItem.disabled"
    :allowClear="props.formItem.props?.allowClear"
    :dropdownMatchSelectWidth="props.formItem.props?.dropdownMatchSelectWidth"
    :suffixIcon="props.formItem.props?.suffixIcon"
    :listHeight="props.formItem.props?.listHeight"
    :mode="props.formItem.props?.mode"
    :maxTagCount="props.formItem.props?.maxTagCount"
    :maxTagTextLength="props.formItem.props?.maxTagTextLength"
    :maxTagPlaceholder="props.formItem.props?.maxTagPlaceholder"
  />
</template>

<style scoped lang="scss"></style>
