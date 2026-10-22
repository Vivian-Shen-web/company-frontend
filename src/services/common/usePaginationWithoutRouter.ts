import { debounce } from '@/utils/common'
import { http } from '@/utils/index'
import { isString } from '@/utils/is'
import { keys, pick } from 'ramda'
import { ref, watch, reactive } from 'vue'

const DEFAULT_PAGE = 1
const DEFAULT_PAGESIZE = 999
const PAGER_QUERYS = { size: DEFAULT_PAGESIZE, page: DEFAULT_PAGE }

type pageRequest = (...argv: any) => Promise<HttpResult<PageList<any>>>

const usePaginationWithoutRouter = <T>(request: string | pageRequest) => {
  const query = reactive({}) as Record<string, any>
  const list = ref([] as T[])
  const loading = ref(false)

  const _pager = {
    page: DEFAULT_PAGE,
    size: DEFAULT_PAGESIZE,
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
    _request({ params })
      .then((res) => {
        const _p = pick(keys(pager), res.data)
        Object.assign(_pager, _p) //直接修改原对象，不触发watch
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
    refresh(q)
  }, 300)

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
export default usePaginationWithoutRouter
