<script setup lang="ts">
import { computed } from 'vue'
import { configProviderProps } from 'ant-design-vue/es/config-provider/context'

import { ConfigProvider } from 'ant-design-vue'
import { useLayoutSettingStore } from '@/stores/modules/layoutSetting'
import { useLocale } from '@/locales/useLocale'
import 'dayjs/locale/zh-cn'

defineOptions({
  name: 'ProConfigProvider'
})

const props = defineProps(configProviderProps())

const layoutSetting = useLayoutSettingStore()
const { getAntdLocale } = useLocale()
const components = {
  components: {
    Button: {
      borderRadius: 18 //基础按钮圆角
      // "borderRadiusLG":18,//LG号按钮圆角
      // "borderRadiusSM": 18,//SM号按钮圆角
      // "borderRadiusXS": 18,//XS号按钮圆角
    }
  }
}

const theme = computed(() => {
  console.log('theme', Object.assign({}, layoutSetting.themeConfig, props.theme, components))
  return Object.assign({}, layoutSetting.themeConfig, props.theme, components)
})
</script>

<template>
  <ConfigProvider v-bind="$props" :locale="getAntdLocale" :theme="theme">
    <slot></slot>
  </ConfigProvider>
</template>
