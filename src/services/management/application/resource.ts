import { http } from '@/utils'
import type { ApiResource, ElementResource, MenuResource } from '../../frame/application'

export type ResourceType = 'menu' | 'element' | 'api'

const resourceUrl = 'management/resource/'

export const ResourceApi = {
  treeByApplication(applicationCode: string) {
    return http.get<TreeNode[]>(`${resourceUrl}application/${applicationCode}/resource`)
  },
  getMenu(applicationCode: string, code: string) {
    return http.get<MenuResource>(`${resourceUrl}${applicationCode}/menu/${code}`)
  },
  getElement(applicationCode: string, code: string) {
    return http.get<ElementResource>(`${resourceUrl}${applicationCode}/element/${code}`)
  },
  getApi(applicationCode: string, code: string) {
    return http.get<ApiResource>(`${resourceUrl}${applicationCode}/api/${code}`)
  },
  updateMenu(applicationCode: string, item: MenuResource) {
    return http.put<MenuResource>(`${resourceUrl}${applicationCode}/menu/${item.code}`, item)
  },
  updateElement(applicationCode: string, item: ElementResource) {
    return http.put<ElementResource>(`${resourceUrl}${applicationCode}/element/${item.code}`, item)
  },
  updateApi(applicationCode: string, item: ApiResource) {
    return http.put<ApiResource>(`${resourceUrl}${applicationCode}/api/${item.code}`, item)
  },
  createMenu(applicationCode: string, item: MenuResource) {
    return http.post<string>(`${resourceUrl}${applicationCode}/menu`, item)
  },
  createElement(applicationCode: string, item: ElementResource) {
    return http.post<string>(`${resourceUrl}${applicationCode}/element`, item)
  },
  createApi(applicationCode: string, item: ApiResource) {
    return http.post<string>(`${resourceUrl}${applicationCode}/api`, item)
  },
  remove(applicationCode: string, type: string, code: string) {
    return http.delete<string>(
      `${resourceUrl}application/${applicationCode}/type/${type}/code/${code}`
    )
  }
}
