import { defineStore, type StoreDefinition } from 'pinia'
import { useKeepAliveStore } from './keepAlive'
import type { RouteLocation } from 'vue-router'
import store from '../'
import { TABS_ROUTES } from '@/enums/cacheEnum'
import router from '@/router'
import { computed, reactive } from 'vue'
import { identity } from 'ramda'

type RouteItem = Omit<RouteLocation, 'matched' | 'redirectedFrom'>

// 不需要出现在标签页中的路由
export const blackList = [] as string[]
type CloseType = 'LEFT' | 'RIGHT' | 'OTHER' | 'CURRENT' | 'ALL'

export const useTabsViewStore = defineStore('tabs-view', () => {
  const tabsList = reactive([] as RouteItem[])

  const getTabsList = computed(() => {
    return tabsList.filter((item) => {
      return !item.meta?.hideInTabs && router.hasRoute(item.name!)
    })
  })
  const getCurrentTab = computed(() => {
    const currentRoute = router.currentRoute.value!
    return tabsList.find((item) => {
      return !item.meta?.hideInTabs && item.fullPath === currentRoute.fullPath
    })
  })
  const delCompFromClosedTabs = (closedTabs: RouteItem[]) => {
    const keepAliveStore = useKeepAliveStore()
    const routes = router.getRoutes()
    const compNames = closedTabs.reduce<string[]>((prev, curr) => {
      if (curr.name && router.hasRoute(curr.name)) {
        const componentName = routes.find((n) => n.name === curr.name)?.components?.default?.name
        componentName && prev.push(componentName)
      }
      return prev
    }, [])
    keepAliveStore.remove(compNames)
  }
  /** 初始化标签页 */
  const initTabs = (routes: RouteItem[]) => {
    tabsList.splice(0, tabsList.length, ...routes.filter(identity))
  }
  /** 添加标签页 */
  const addTabs = (route: RouteItem): boolean => {
    const name = route.name
    if (blackList.includes(name as string)) return false
    const isExists = tabsList.some((item) => item.fullPath == route.fullPath)
    if (!isExists) {
      tabsList.push(route)
    }
    return true
  }
  /** 关闭左侧 */
  const closeLeftTabs = (route: RouteItem) => {
    const index = tabsList.findIndex((item) => item.fullPath == route.fullPath)
    delCompFromClosedTabs(tabsList.splice(0, index))
  }
  /** 关闭右侧 */
  const closeRightTabs = (route: RouteItem) => {
    const index = tabsList.findIndex((item) => item.fullPath == route.fullPath)
    delCompFromClosedTabs(tabsList.splice(index + 1))
  }
  /** 关闭其他 */
  const closeOtherTabs = (route: RouteItem) => {
    const targetIndex = tabsList.findIndex((item) => item.fullPath === route.fullPath)
    if (targetIndex !== -1) {
      const current = tabsList.splice(targetIndex, 1)
      delCompFromClosedTabs(tabsList)
    }
  }
  /** 关闭当前页 */
  const closeCurrentTab = (route: RouteItem) => {
    const index = tabsList.findIndex((item) => item.fullPath == route.fullPath)
    const isDelCurrentTab = Object.is(getCurrentTab, tabsList[index])
    delCompFromClosedTabs(tabsList.splice(index, 1))
    // 如果关闭的tab就是当前激活的tab，则重定向页面
    if (isDelCurrentTab) {
      const currentRoute = tabsList[Math.max(0, tabsList.length - 1)]
      router.push(currentRoute)
    }
  }
  /** 关闭全部 */
  const closeAllTabs = () => {
    delCompFromClosedTabs(tabsList)
    tabsList.splice(0, tabsList.length)
    localStorage.removeItem(TABS_ROUTES)
  }
  // 更新tab标题
  const updateTabTitle = (title: string) => {
    const currentRoute = router.currentRoute.value
    const upTarget = tabsList.find((item) => item.fullPath === currentRoute.fullPath)
    if (upTarget) {
      upTarget.meta.title = title
    }
  }
  const closeTabs = (route: RouteItem, type: CloseType) => {
    switch (type) {
      case 'LEFT':
        closeLeftTabs(route)
        break
      case 'RIGHT':
        closeRightTabs(route)
        break
      case 'OTHER':
        closeOtherTabs(route)
        break
      case 'CURRENT':
        closeCurrentTab(route)
        break
      case 'ALL':
        closeAllTabs()
        break
    }
  }
  return {
    tabsList,
    getTabsList,
    getCurrentTab,
    initTabs,
    addTabs,
    closeTabs,
    updateTabTitle
  }
}) as StoreDefinition<
  'tabs-view',
  {
    tabsList: RouteItem[]
  },
  { getTabsList: () => RouteItem[]; getCurrentTab: () => RouteItem },
  {
    initTabs: (routes: RouteItem[]) => void
    addTabs: (route: RouteItem) => boolean
    closeTabs: (route: RouteItem, type: CloseType) => void
    updateTabTitle: (title: string) => void
  }
>

// 在组件setup函数外使用
export function useTabsViewStoreWithOut() {
  return useTabsViewStore(store)
}
