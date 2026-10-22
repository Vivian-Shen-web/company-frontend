<script lang="ts" setup>
import { IconUtils, IqIcon } from '@/components/basic/icon'

import type { PropType } from 'vue'
type MenuResource = {
  code: string
  description: string
  path: string
  icon: string
}

defineProps({
  item: {
    type: Object as PropType<MenuResource>,
    default: () => ({})
  }
})
const prefix = IconUtils.prefix('ANTDESIGN-OUTLINED')
</script>

<template>
  <template v-if="item.icon">
    <IqIcon :icon="prefix(item.icon)" />
  </template>
  <span>
    {{ item.description }}
  </span>
</template>
