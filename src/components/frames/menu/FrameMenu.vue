<script setup lang="ts">
import { reactive, computed, watch, type PropType, VueElement, h, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu, type ItemType, type MenuTheme } from 'ant-design-vue'
import { useLayoutSettingStore } from '@/stores/modules/layoutSetting'
import FrameMenuItemContent from './FrameMenuItemContent.vue'
import { loopTreeCurry } from '@/utils/tree.util'

type MenuResource = {
  code: string
  description: string
  path: string
  icon: string
}

console.log('enter')
const props = defineProps({
  collapsed: {
    // 侧边栏菜单是否收起
    type: Boolean
  },
  theme: {
    type: String as PropType<MenuTheme>
  }
})
const layoutSettingStore = useLayoutSettingStore()
// 当前路由
const currentRoute = useRoute()
const router = useRouter()
const state = reactive({
  openKeys: [] as string[],
  selectedKeys: [currentRoute.name] as string[]
})

const menus = ref([] as MenuResource[])
/** 侧边栏布局 */
const isSideMenu = computed(() => layoutSettingStore.layoutSetting.layout === 'sidemenu')

// ApplicationApi.menu().then((data) => {
// menus.value = data
menus.value = [
  {
    code: 'evaluate',
    description: '智能评估',
    path: '/',
    icon: 'robot'
  },
  {
    code: 'manage',
    description: '评估管理',
    path: '/manage',
    icon: 'appstore-add'
  }
]
const openKeys: string[] = []
// 获取当前打开的子菜单
const selectedKeys: string[] = []
loopTreeCurry((item: MenuResource) => {
  if (currentRoute.path == item.path) {
    selectedKeys.push(item.code)
  } else if (currentRoute.path.includes(item.path)) {
    openKeys.push(item.code)
  }
}, menus.value)

if (isSideMenu.value) {
  state.openKeys = openKeys
  state.selectedKeys = selectedKeys
} else {
  state.openKeys = []
  state.selectedKeys = openKeys
}
// })

const handleMenuItemClick = (item: MenuResource) => {
  //TODO:click
  router.push(item.path)
  // const { isExt, extOpenMode } = item.meta || {}
  // if (isExt && extOpenMode !== 2) {
  //   window.open(item.path)
  // }
}
</script>

<template>
  <div class="menu-container" :class="{ 'is-side-menu': isSideMenu }">
    <Menu
      v-model:selected-keys="state.selectedKeys"
      v-model:open-keys="state.openKeys"
      :mode="isSideMenu ? 'inline' : 'horizontal'"
      :theme="theme"
      :collapsed="props.collapsed"
      collapsible
    >
      <template v-for="item in menus" :key="item.code">
        <AMenuItem @click="handleMenuItemClick(item)">
          <FrameMenuItemContent :item="item" />
        </AMenuItem>
      </template>
    </Menu>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &.is-side-menu {
    height: calc(100vh - 64px);
  }
}
</style>
