<!-- 弹出框表单 -->
<script setup lang="ts" generic="T extends Record<string, any>">
import { formCol } from '@/configs/form'
import { watch, ref } from 'vue'
import type { CustomFormItem } from '@/components/basic/custom-form/customForm'
import type { Rule } from 'ant-design-vue/es/form'
import { i18n } from '@/locales'

type Props = {
  title: string
  okText?: string
  formItems: CustomFormItem[]
  rules?: Record<string, Rule[]>
  api: (t: T) => Promise<any>
}

const props = withDefaults(defineProps<Props>(), {
  okText: i18n.global.t('global.operation.save'), //setup外 要用全局的i18n
  formItems: () => [] as CustomFormItem[],
  rules: () => ({}) as Record<string, Rule[]>,
  api: () => (t: T) => Promise.resolve(t)
})

const open = defineModel('open', { default: false })
const form = defineModel<T>({})
// const emits = defineEmits<{
//   submit: [data: T | undefined]
// }>()
const { labelCol, wrapperCol } = formCol['column4']
const formRef = ref()
const confirmLoading = ref<boolean>(false)

watch(open, () => {
  confirmLoading.value = false
  formRef.value?.resetFields()
})
const submit = () => {
  confirmLoading.value = true
  formRef.value
    .validate()
    .then(() => {
      if (form.value) {
        return props.api(form.value).then(() => {
          open.value = false
        })
      }
    })
    .catch((error: any) => {
      confirmLoading.value = false
      console.log('error', error)
    })
}
</script>

<template>
  <AModal
    v-model:open="open"
    :title="title"
    :okText="okText"
    @ok="submit()"
    :confirm-loading="confirmLoading"
  >
    <AForm ref="formRef" :model="form" :labelCol="labelCol" :wrapperCol="wrapperCol" :rules="rules">
      <CustomFormItem :form-items="formItems" v-model:value="form"></CustomFormItem>
    </AForm>
  </AModal>
</template>

<style scoped lang="scss"></style>
