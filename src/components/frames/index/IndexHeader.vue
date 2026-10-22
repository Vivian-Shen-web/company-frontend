<script lang="tsx" setup>
import { computed, ref, type CSSProperties, type PropType } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { type MenuTheme } from 'ant-design-vue'
import { useLayoutSettingStore } from '@/stores/modules/layoutSetting'
import { locateNodeCurry } from '@/utils/tree.util'
import BtnFullscreen from './BtnFullscreen.vue'
import ThemeSetting from './ThemeSetting.vue'

type MenuResource = {
  code: string
  description: string
  path: string
  icon: string
}

defineProps({
  collapsed: {
    type: Boolean
  },
  theme: {
    type: String as PropType<MenuTheme>
  }
})
const emit = defineEmits(['update:collapsed'])
const layoutSettingStore = useLayoutSettingStore()

const router = useRouter()
const route = useRoute()
const headerStyle = computed<CSSProperties>(() => {
  const { navTheme, layout } = layoutSettingStore.layoutSetting
  const isDark = navTheme === 'dark' && layout === 'topmenu'
  return {
    backgroundColor: navTheme === 'realDark' || isDark ? '' : 'rgba(255, 255, 255, 0.85)',
    color: isDark ? 'rgba(255, 255, 255, 0.85)' : ''
  }
})

const menus = ref([] as MenuResource[])
const breadcrumbs = computed(() => {
  return route.matched
})
const lastBreadcrumb = computed(() =>
  breadcrumbs.value ? breadcrumbs.value[breadcrumbs.value.length - 1] : { name: '', path: '' }
)

const currentParentMenu = computed(() => {
  let parent: MenuResource | undefined = undefined
  locateNodeCurry(
    { path: lastBreadcrumb.value.path.replace('/admin', '') },
    (node: MenuResource, flag: boolean) => {
      if (flag == false && !parent) {
        //第一个父节点赋值
        parent = node
      }
    }
  )(menus.value)
  return parent || { children: [] as MenuResource[] }
})

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

const getSelectKeys = () => {
  return [lastBreadcrumb.value.path.replace('/admin', '')]
}

// 点击菜单
const clickMenuItem = (item: MenuResource) => {
  router.push(item.path)
}
</script>

<template>
  <ALayoutHeader :style="headerStyle" class="layout-header">
    <ASpace :size="20">
      <slot>
        <ASpace :size="20">
          <span class="menu-fold" @click="() => emit('update:collapsed', !collapsed)">
            <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" />
          </span>
          <ABreadcrumb>
            <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb?.name">
              <ABreadcrumbItem>
                {{ breadcrumb?.meta.title }}
                <template #overlay v-if="lastBreadcrumb.name == breadcrumb.name">
                  <AMenu
                    :selectedKeys="getSelectKeys()"
                    v-if="currentParentMenu.children.length > 1"
                  >
                    <template v-for="menuItem in currentParentMenu.children" :key="menuItem.path">
                      <AMenuItem @click="clickMenuItem(menuItem)">
                        {{ menuItem.description }}
                      </AMenuItem>
                    </template>
                  </AMenu>
                </template>
              </ABreadcrumbItem>
            </template>
          </ABreadcrumb>
        </ASpace>
      </slot>
    </ASpace>
    <ASpace :size="20">
      <BtnFullscreen />
      <ThemeSetting />
    </ASpace>
  </ALayoutHeader>
</template>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  position: sticky;
  z-index: 10;
  top: 0;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  padding: 0 20px;

  * {
    cursor: pointer;
  }
}
</style>
