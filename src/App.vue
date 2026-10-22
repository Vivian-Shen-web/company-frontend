<script setup lang="ts">
import ProConfigProvider from '@/components/basic/pro-config-provider.vue'

import { theme } from 'ant-design-vue'
import { keys } from 'ramda'
import { computed } from 'vue'
import Color from 'color'
import { storeToRefs } from 'pinia'

import { useLayoutSettingStore } from '@/stores/modules/layoutSetting'
const layoutSettingStore = useLayoutSettingStore()

const { layoutSetting } = storeToRefs(layoutSettingStore)
const { useToken } = theme
const { token } = useToken()
const cssVarStyle = computed(() => {
  const list = keys(token.value)
  const style: Record<string, any> = {}
  list.forEach((key) => {
    const varKey = '--' + key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    style[varKey] = token.value[key]
  })
  // 处理浅色和深色主题的颜色,添加一个浅色和深色主题的颜色变量
  if (layoutSetting.value.navTheme === 'realDark') {
    style['--color-primary-shallow'] = Color(token.value.colorPrimaryBg).darken(0.4).hex() // 使用简单的颜色变暗函数来计算深色
  } else {
    style['--color-primary-shallow'] = Color(token.value.colorPrimaryBg).lighten(0.03).hex() // 使用简单的颜色变亮函数来计算浅色
  }
  return style
})
</script>

<template>
  <ProConfigProvider>
    <router-view #="{ Component }">
      <component :is="Component" :style="cssVarStyle" />
    </router-view>
    <!-- <LockScreen /> -->
  </ProConfigProvider>
</template>

<style scoped></style>
