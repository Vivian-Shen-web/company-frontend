<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useLocaleStore } from '@/stores/modules/locale'
import { type PropType, computed } from 'vue'
// import { useLocaleStore } from '@/stores/modules/locale';

defineOptions({
  name: 'I18n'
})
const props = defineProps({
  title: {
    type: [String, Object] as PropType<string>,
    required: true,
    default: ''
  }
})

const localeStore = useLocaleStore()

const getTitle = computed(() => {
  const { title = '' } = props
  if (typeof title === 'object') {
    return title?.[localeStore.locale] ?? title
  }
  return title
})
</script>

<template>
  <I18nT tag="span" :keypath="getTitle" scope="global" />
</template>
