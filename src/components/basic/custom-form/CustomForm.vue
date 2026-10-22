<!-- 文件描述 -->
<script setup lang="ts" generic="T extends Record<string, any>">
import { formCol } from '@/configs/form'
import useNav from '@/services/common/useNav'
import { ref } from 'vue'
import type { CustomFormItem } from '@/components/basic/custom-form/customForm'
import type { Rule } from 'ant-design-vue/es/form'
import { i18n } from '@/locales'

type Props = {
  submitTitle?: string
  formItems: CustomFormItem[]
  disabled?: boolean
  rules?: Record<string, Rule[]>
  customFormCol?: any
}
withDefaults(defineProps<Props>(), {
  submitTitle: i18n.global.t('global.operation.save'), //setup外 要用全局的i18n
  formItems: () => [] as CustomFormItem[],
  disabled: false,
  rules: () => ({}) as Record<string, Rule[]>,
  customFormCol: () => formCol['column4']
})
const form = defineModel<T>('value', {})
const emits = defineEmits<{
  submit: [data: T | undefined]
}>()
// const { labelCol, wrapperCol, btnWrapperCol } = formCol['column4']
const { navBack } = useNav()

const formRef = ref()

const submit = () => {
  formRef.value
    .validate()
    .then(() => {
      emits('submit', form.value)
    })
    .catch((error: any) => {
      console.log('error', error)
    })
}
</script>

<template>
  <AForm
    ref="formRef"
    :model="form"
    :labelCol="customFormCol.labelCol"
    :wrapperCol="customFormCol.wrapperCol"
    :rules="rules"
    :disabled="disabled"
    @finish="submit"
  >
    <CustomFormItem
      class="px-2"
      :form-items="formItems"
      :custom-form-col="customFormCol"
      v-model:value="form"
      :rules="rules"
    ></CustomFormItem>
    <AFormItem class="" :wrapper-col="customFormCol.btnWrapperCol">
      <slot name="btn">
        <ASpace>
          <AButton type="primary" html-type="submit">
            {{ submitTitle }}
          </AButton>
          <AButton type="default" :disabled="false" @click="navBack()">返回</AButton>
        </ASpace>
      </slot>
    </AFormItem>
  </AForm>
</template>

<style scoped lang="scss"></style>
