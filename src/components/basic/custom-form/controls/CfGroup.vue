<!-- 自定义表单组件 -->
<script setup lang="ts">
import { computed } from 'vue'
import type { TypeGroup } from '../customForm'
import { formCol } from '@/configs/form'

const props = defineProps<{ formItem: TypeGroup; customFormCol: any; rules: any }>()
const model = defineModel<any>('value', { default: {} })
const formItems = computed(() => props.formItem.props.children)
// const { labelCol, wrapperCol, btnWrapperCol } = formCol['column4']
</script>

<template>
  <!-- <AForm
    ref="formRef"
    :model="model"
    :labelCol="customFormCol.labelCol"
    :wrapperCol="customFormCol.wrapperCol"
  > -->
  <CustomFormItem
    :form-items="formItems"
    :customFormCol="customFormCol"
    :rules="rules[formItem.name]"
    :parent-name="[formItem.name]"
    v-model:value="model"
  ></CustomFormItem>
  <!-- </AForm> -->
</template>

<style scoped lang="scss"></style>
