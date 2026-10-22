<!-- 自定义表单组件 -->
<script setup lang="ts" generic="T extends Record<string, any>">
import type { CustomFormItem } from './customForm'
import { componentMap } from './controls'
import type { Component } from 'vue'
import { computed } from 'vue'
import { isString } from '@/utils/is'
import { formCol } from '@/configs/form'

const props = defineProps<{
  formItems: CustomFormItem[]
  exComponents?: Record<string, Component>
  customFormCol?: any
  rules?: Record<string, any>
  parentName?: (string | number)[]
}>()

const form = defineModel<T>('value', { default: {} })
// const { labelCol, wrapperCol, btnWrapperCol } = formCol['column4']

const components = computed(() => {
  const map = { ...componentMap }
  Object.assign({}, props.exComponents)
  return map
})
const getComponent = (c: string | Component) => {
  if (isString(c)) {
    return components.value[c]
  } else {
    return c
  }
}
defineOptions({
  inheritAttrs: false
})

let getLabelCol = (item: any) => {
  if (item.label == '' && (item.type == 'title' || item.type == 'divider')) {
    return { span: 24 }
  } else {
    if (item.width != undefined && item.width > 12) {
      return { span: Number(props.customFormCol.labelCol.span) / 2 }
    } else {
      return { span: props.customFormCol.labelCol.span }
    }
  }
  // return item.width != undefined && item.width > 12
  //   ? { span: Number(props.customFormCol.labelCol.span) / 2 }
  //   : { span: props.customFormCol.labelCol.span }
}
const getName = (name: string) => {
  return name ? (props.parentName ? [...props.parentName, name] : name) : props.parentName
}
const getParentName = (name: string) => {
  return name ? [...(props.parentName ?? []), name] : props.parentName || []
}
const getRules = (item: any) => {
  let rules
  if (Array.isArray(props.rules && props.rules[item.name])) {
    rules = item.rules || (props.rules && props.rules[item.name]) || []
  }
  return rules
}
</script>
<template>
  {{ rules }}
  <ARow>
    <ACol
      v-for="item in formItems"
      :key="item.name"
      :span="
        item.type == 'group' || item.type == 'arrayMultiple' || item.type == 'arraySingle'
          ? 24
          : item.width || 12
      "
    >
      <AFormItem
        v-if="item.type != 'arrayMultiple' && item.type != 'group'"
        :name="getName(item.name)"
        :label="$t(item.label || '')"
        :wrapper-col="item.label ? undefined : { span: 24 }"
        :label-col="getLabelCol(item)"
        :rules="getRules(item)"
        class="px-2"
      >
        <component
          :is="getComponent(item.type)"
          v-model:value="form[item.name]"
          :rules="rules"
          :form="form"
          :disabled="item.disabled"
          :formItem="item"
          :custom-form-col="customFormCol"
          :parentName="getParentName(item.name)"
        ></component>
      </AFormItem>
      <component
        v-else
        :is="getComponent(item.type)"
        v-model:value="form[item.name]"
        :rules="rules"
        :form="form"
        :disabled="item.disabled"
        :formItem="item"
        :custom-form-col="customFormCol"
        :parentName="getParentName(item.name)"
      ></component>
    </ACol>
  </ARow>
</template>
<style scoped lang="scss"></style>
