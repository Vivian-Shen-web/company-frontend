<!-- 租户信息根据租户code获取 -->
<script setup lang="ts">
import { useTenantStore } from '@/stores/modules/tenant'
import { computed } from 'vue'

const tenantStore = useTenantStore()
const props = defineProps<{ code?: string }>()

const tenant = computed(() => {
  if (props.code) {
    tenantStore.get(props.code)
    return tenantStore.data[props.code]
  }
  return null
})
</script>

<template>
  <AAvatar v-if="tenant !== null">
    {{ tenant?.name }}
  </AAvatar>
</template>

<style scoped lang="scss"></style>
