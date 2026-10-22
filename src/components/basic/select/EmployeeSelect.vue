<script setup lang="ts">
import usePaginationWithoutRouter from '@/services/common/usePaginationWithoutRouter'
import { EmployeeApi, EmployeeDetail } from '@/services/tenant/employee/employee'
import { computed, ref } from 'vue'

const { list, query, change, loading } = usePaginationWithoutRouter<EmployeeDetail>(
  EmployeeApi.list
)
// Todo 这里的数据要不要和外层绑定断开，然后根据确定和取消来进行数据传值
const employees = defineModel({ type: Array<EmployeeDetail>, required: true })
const props = withDefaults(
  defineProps<{ max?: number; title?: string; searchTitle?: string; searchPlaceHolder?: string }>(),
  { title: '人员分配', searchTitle: '人员名称:' }
)

const isShowModal = ref<boolean>(false)
const search = (searchTerm: string) => {
  Object.assign(query, {
    name: searchTerm
  })
  change()
}

const cancel = () => {}

const ok = () => {
  isShowModal.value = false
}

const hidenBtn = computed(() => {
  return props.max ? employees.value.length < props.max : true
})
</script>

<template>
  <ARow :gutter="[16, 16]">
    <ACol v-for="(item, index) in employees" :key="item.id">
      <slot name="item" :item="item" :index="index"></slot>
    </ACol>
    <ACol>
      <EmployeeSelectInput
        v-model:list="list"
        v-model:selectedValue="employees"
        v-model:is-show-modal="isShowModal"
        :maxLength="props.max"
        @search="search"
      >
        <template #btn>
          <AButton class="h-full" type="primary" v-if="hidenBtn">+</AButton>
        </template>
      </EmployeeSelectInput>
    </ACol>
  </ARow>
  <MulSelectModal
    v-model:open="isShowModal"
    :originData="list"
    v-model:selectedData="employees"
    :isShowSearch="true"
    :width="'700'"
    :title="title"
    @search="search"
    @cancel="cancel"
    @ok="ok"
    :maxLength="props.max"
    :loading="loading"
    :searchTitle="searchTitle"
  >
    <template #left="{ item }">
      <span>{{ item.name }}</span>
    </template>
    <template #right="{ item }">
      <span>{{ item.name }}</span>
    </template>
  </MulSelectModal>
</template>

<style scoped lang="scss"></style>
