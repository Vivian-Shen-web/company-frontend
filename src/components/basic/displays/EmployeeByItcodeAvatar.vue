<!-- 组织成员信息通过username获取 -->
<script setup lang="ts">
import { computed } from 'vue'
import { useEmployeeByItcodeStore } from '@/stores/modules/employeeByItcode'

const props = defineProps<{ itcode?: string }>()
const employeeByItcodeStore = useEmployeeByItcodeStore()

const user = computed(() => {
  if (props.itcode) {
    employeeByItcodeStore.get(props.itcode)
    return employeeByItcodeStore.data[props.itcode]
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
