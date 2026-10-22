<script setup lang="ts">
import { useEmployeeStore } from '@/stores/modules/employee'
import { computed } from 'vue'

const employeeStore = useEmployeeStore()
const props = defineProps<{ id: string }>()

const user = computed(() => {
  if (props.id) {
    employeeStore.get(props.id)
    return employeeStore.data[props.id]
  }
  return null
})

const emits = defineEmits(['close'])

const handleClosedBtn = () => {
  emits('close', user)
}
</script>

<template>
  <AFlex class="h-full">
    <ACard class="employee-card" :size="'small'">
      <ACardMeta
        :title="user?.name"
        :description="user?.department?.name ? user?.department?.name : '暂无部门'"
      >
        <template #avatar>
          <AAvatar>{{ user?.name }}</AAvatar>
        </template>
      </ACardMeta>
    </ACard>
    <AButton class="employee-btn" type="primary" @click="handleClosedBtn()">x</AButton>
  </AFlex>
</template>

<style scoped lang="scss">
.employee-card {
  @apply h-full rounded-br-none rounded-tr-none;
}

.employee-btn {
  @apply h-full rounded-tl-none rounded-bl-none bg-stone-300;
}
</style>
