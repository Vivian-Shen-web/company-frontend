<script setup lang="ts">
import type { TypeSelect } from '../../basic/custom-form/customForm'
import { DepartmentApi } from '@/services/tenant/department/department'
import type { TreeProps } from 'ant-design-vue/es/tree'
import { ref, watch } from 'vue'

const selected = ref<string>()
const props = defineProps<{ formItem: TypeSelect }>()
const DepartmentTree = ref<TreeProps['treeData']>([])
const model = defineModel('value', { type: Object })
const initSelected = () => {
  selected.value = model.value?.id
}
initSelected()

watch(
  () => selected.value,
  (newSelected) => {
    if (newSelected != null) {
      getDepartmentInfo(newSelected)
    }
  }
)

const getDepartmentInfo = (id: string) => {
  DepartmentApi.one(id)
    .then((res) => {
      model.value = res.data
    })
    .catch((error) => {})
}

const initTree = () => {
  DepartmentApi.getDepartmentTree()
    .then((res) => {
      DepartmentTree.value = [res.data as any]
    })
    .catch((err) => {})
}
initTree()
</script>

<template>
  <ATreeSelect
    v-model:value="selected"
    :tree-data="DepartmentTree"
    tree-node-filter-prop="title"
    :field-names="{
      children: 'children',
      label: 'title',
      value: 'key'
    }"
    :placeholder="'请选择部门'"
    :showSearch="props.formItem?.props?.showSearch"
    :allow-clear="props.formItem.props?.allowClear"
    :placement="props.formItem.props?.placement"
    :dropdown-match-select-width="props.formItem.props?.dropdownMatchSelectWidth"
    :suffix-icon="props.formItem.props?.suffixIcon"
    :list-height="props.formItem.props?.listHeight"
  />
</template>

<style scoped lang="scss"></style>
