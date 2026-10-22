import { debounce } from '@/utils/common'
import { http } from '@/utils/index'
import { is, isString } from '@/utils/is'
import type { AxiosResponse } from 'axios'
import { compose, keys, omit, pick, pickBy } from 'ramda'
import { ref, watch, reactive } from 'vue'

import { useRoute, useRouter } from 'vue-router'

const DEFAULT_PAGE = 1
const DEFAULT_PAGESIZE = 10
const PAGER_QUERYS = { size: DEFAULT_PAGESIZE, page: DEFAULT_PAGE }

type pageRequest = (...argv: any) => Promise<HttpResult<PageList<any>>>

const usePagination = <T>(request: string | pageRequest) => {
  const route = useRoute()
  const router = useRouter()

  //静态query值
  let _query = route.query

  const query = reactive(omit(['page', 'size'], _query) as Record<string, any>) //联动触发
  const list = ref([] as T[])
  const loading = ref(false)

  const _pager = {
    page: Number(_query.page) || DEFAULT_PAGE,
    size: Number(_query.size) || DEFAULT_PAGESIZE,
    totalElements: 0,
    totalPages: 0
  }
  const pager = reactive(_pager)

  const refresh = (params: Record<string, any>) => {
    let _request!: pageRequest

    if (isString(request)) {
      _request = http.get<PageList<any>>
    } else {
      _request = request
    }

    loading.value = true
    _request(params)
      .then((res) => {
        const _p = pick(keys(pager), res.data)
        Object.assign(_pager, _p) //直接修改原对象，不触发watch
        changeUrl(prepareRequestParam())
        return res
      })
      .then(
        (res) => {
          list.value = res.data.content
          loading.value = false
        },
        () => {
          loading.value = false
        }
      )
  }
  const change = debounce(() => {
    const q = prepareRequestParam()
    changeUrl(q)
    refresh(q)
  }, 300)

  //修改url，在请求前、请求后触发
  const changeUrl = (q: Record<string, any>) => {
    const searchQuery: Record<string, any> = pickBy((value: any, key: any) => {
      return value != null && value != '' && (PAGER_QUERYS as Record<string, any>)[key] != value
    })(q)
    _query = route.query
    //url不一致时候修改url
    if (
      keys(searchQuery).length != keys(_query).length ||
      keys(searchQuery).filter((key) => _query[key] != searchQuery[key]).length > 0
    ) {
      router.replace({ path: route.path, query: searchQuery })
    }
  }
  //合并搜索和分页部分内容
  const prepareRequestParam = () => ({ ...query, ...pick(keys(PAGER_QUERYS), pager) })

  watch(query, () => {
    change()
  })
  watch([() => pager.page, () => pager.size], ([page, size]) => {
    //如果分页发生变化，触发请求
    change()
  })
  refresh(prepareRequestParam())
  return {
    list,
    pager,
    query,
    change,
    loading
  }
}
export default usePagination
