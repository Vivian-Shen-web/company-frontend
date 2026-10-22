<!-- 自定义表单组件 -->
<script setup lang="ts">
import { computed } from 'vue'
import type { TypeArrayMultiple, TypeGroup } from '../customForm'
import { formCol } from '@/configs/form'

const props = defineProps<{
  formItem: TypeArrayMultiple
  customFormCol: any
  rules: any
  parentName: string[]
}>()
const model = defineModel<any>('value', { default: [] })
const formItems = computed(() => props.formItem.props.children)
const { labelCol, wrapperCol, btnWrapperCol } = formCol['column4']
import { IconUtils } from '../../icon'
const icons = {
  del: IconUtils.prefix('ANTDESIGN-OUTLINED', 'minus-circle')
}
const getName = () => {
  let arr = formItems.value
  let item: any = {}

  arr.map((element: any) => {
    item[element.name] = ''
  })

  return item
}
const add = () => {
  // model.value.push(getName())
  model.value = [...model.value, getName()]
}
const del = (data: any) => {
  let index = model.value.indexOf(data)
  model.value.splice(index, 1)
}
const getparentName = (index: number) => {
  return [...props.parentName, index]
}

const replaceIndex = (key: number) => {
  return props.rules && props.rules[props.parentName[props.parentName.length - 1]].index
}
</script>

<template>
  <ACol v-for="(item, index) in model" :key="index" :span="24">
    <ARow>
      <ACol :span="20">
        <CustomFormItem
          :form-items="formItems"
          :customFormCol="customFormCol"
          v-model:value="model[index]"
          :parentName="getparentName(index)"
          :rules="replaceIndex(index)"
        ></CustomFormItem>
      </ACol>
      <ACol :span="4">
        <IqIcon @click="del(item)" class="handle font26 cursor-pointer" :icon="icons.del"></IqIcon>
      </ACol>
    </ARow>
  </ACol>

  <div class="flex justify-center">
    <div
      class="w-4/5 p-1 text-center cursor-pointer flex justify-center items-center mb-6 border border-dashed"
      @click="add()"
    >
      + 添加
    </div>
  </div>
</template>

<style scoped lang="scss">
.font26 {
  font-size: 26px !important;
}

.cursor {
  cursor: pointer;
}

.add {
  width: 100%;
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  border: 1px dashed #000;
  cursor: pointer;
}
</style>
