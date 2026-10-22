<!-- 组织信息根据组织tenant获取 -->
<script setup lang="ts">
import { useOrganizationStore } from '@/stores/modules/organization'
import { computed } from 'vue'

const organizationStore = useOrganizationStore()
const props = defineProps<{ id?: string }>()

const organization = computed(() => {
  if (props.id != undefined) {
    organizationStore.get(props.id)
    return organizationStore.data[props.id]
  }
  return null
})
</script>

<template>
  <APopover>
    <template #content>
      <ARow justify="center">
        <ACol>
          <AAvatar v-if="organization !== null" :size="'large'" :shape="'square'">
            {{ organization?.name }}
          </AAvatar>
        </ACol>
      </ARow>
      <ADivider class="my-2" />
      <ARow>
        <ACol>名称:</ACol>
        <ACol>{{ organization?.name }}</ACol>
      </ARow>
      <ARow>
        <ACol>别名:</ACol>
        <ACol>{{ organization?.anotherName }}</ACol>
      </ARow>
      <ARow>
        <ACol>地址:</ACol>
        <ACol>{{ organization?.address }}</ACol>
      </ARow>
      <ARow>
        <ACol>联系方式:</ACol>
        <ACol>{{ organization?.contactTel }}</ACol>
      </ARow>
    </template>
    <AAvatar :shape="'square'" v-if="organization !== null">
      {{ organization?.name }}
    </AAvatar>
  </APopover>
</template>

<style scoped lang="scss"></style>
