<!-- eslint-disable vue/multi-word-component-names -->

<!--路由信息定义-->
<route lang="json">
{
  "meta": {
    "title": "麻醉科"
  }
}
</route>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLayoutSettingStore } from '@/stores/modules/layoutSetting'

const layoutSettingStore = useLayoutSettingStore()
const { layoutSetting } = storeToRefs(layoutSettingStore)
const collapsed = ref<boolean>(false)
// 自定义侧边栏菜单收缩和展开时的宽度
const asiderWidth = computed(() => (collapsed.value ? 40 : 220))
// 主题配置
const getTheme = computed(() => (layoutSetting.value.navTheme === 'light' ? 'light' : 'dark'))
</script>

<template>
  <ALayout class="layout">
    <ALayoutSider
      v-if="layoutSetting.layout === 'sidemenu'"
      v-model:collapsed="collapsed"
      :width="asiderWidth"
      :trigger="null"
      collapsible
      :theme="getTheme"
      class="layout-sider"
    >
      <!-- logo -->
      <IndexLogo :collapsed="collapsed" />
      <!-- 菜单 -->
      <FrameMenu :collapsed="collapsed" :theme="getTheme" />
    </ALayoutSider>
    <ALayout>
      <IndexHeader v-model:collapsed="collapsed" :theme="getTheme">
        <template v-if="layoutSetting.layout === 'topmenu'" #default>
          <!-- logo -->
          <IndexLogo :collapsed="collapsed" />
          <!-- 菜单 -->
          <FrameMenu :collapsed="collapsed" :theme="getTheme" />
        </template>
      </IndexHeader>
      <ALayoutContent class="layout-content">
        <RouterView></RouterView>
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;

  .layout-content {
    height: calc(100vh - 64px);
    overflow: auto;
  }
}
</style>
