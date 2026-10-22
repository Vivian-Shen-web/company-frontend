<script setup lang="ts">
import { DepartmentApi } from '@/services/tenant/department/department'
import type { TreeProps } from 'ant-design-vue/es/tree'
import { ref, watch } from 'vue'

const selected = ref<string>()
const props = withDefaults(defineProps<{ dropdownMatchSelectWidth?: number }>(), {
  dropdownMatchSelectWidth: 300
})
const DepartmentTree = ref<TreeProps['treeData']>([])
const selectedValue = defineModel({ type: Object })
const initSelected = () => {
  selected.value = selectedValue.value?.id
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
      selectedValue.value = res.data
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
  <div>
    <ATreeSelect
      allow-clear
      v-model:value="selected"
      :tree-data="DepartmentTree"
      tree-node-filter-prop="title"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      :field-names="{
        children: 'children',
        label: 'title',
        value: 'key'
      }"
      :placeholder="'请选择部门'"
      :showSearch="true"
      :dropdownMatchSelectWidth="props.dropdownMatchSelectWidth"
    />
  </div>
</template>

<style scoped lang="scss"></style>
@/services/tenant/department/department
