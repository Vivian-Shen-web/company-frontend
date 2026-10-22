<!-- 用户信息 -->
<script setup lang="ts">
import { useEmployeeStore } from '@/stores/modules/employee'
import { computed } from 'vue'

const employeeStore = useEmployeeStore()
const props = defineProps<{ id?: string }>()

const user = computed(() => {
  if (props.id) {
    employeeStore.get(props.id)
    return employeeStore.data[props.id]
  }
  return null
})
</script>

<template>
  <AAvatar v-if="user !== null">
    {{ user?.name }}
  </AAvatar>
</template>

<style scoped lang="scss"></style>
