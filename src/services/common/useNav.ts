import { useRoute, useRouter, type RouteLocationRaw } from 'vue-router'

const useNav = () => {
  const route = useRoute()
  const router = useRouter()

  /**
   * 重载页面，可选择改变query,是否替换导航记录
   * @param query
   */
  const reload = (options: { query?: Record<string, any>; replace?: boolean }) => {
    const ops: RouteLocationRaw = { path: route.path }
    if (options.query) {
      ops.query = options.query
    }
    if (options.replace) {
      router.replace(ops)
    } else {
      router.push(ops)
    }
  }

  /**
   * 创建成功后，导航到编辑状态
   * @param id
   */
  const navAfterCreate = (id: string) => {
    const path = route.path
    router.replace({ path: path.replace(/\/0$/g, id) })
  }

  /**
   * back
   */
  const navBack = () => {
    router.back()
  }

  /**
   * 链接到上一级，注意一般回退用navBack,此处的到上一级会产生历史记录
   */
  const navUpper = () => {
    let index = route.path.lastIndexOf('/')
    if (index == route.path.length - 1) {
      index = route.path.lastIndexOf('/', index - 1)
    }
    router.push({ path: route.path.substring(0, index + 1) })
  }

  /**
   * 回到首页
   */
  const navHome = () => {
    router.push('/')
  }

  return {
    reload,
    navBack,
    navUpper,
    navHome,
    navAfterCreate
  }
}

export default useNav
