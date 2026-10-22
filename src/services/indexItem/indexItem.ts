import { http } from '@/utils'

/**
 * 类
 */

export class IndexItemTarget {
  'id'?: string
  'createDate': string
  'lastModifiedDate': string
  'createBy': string
  'lastModifiedBy': string
  'year': string
  'quarter': string
  'month': string
  'value': number
  'commonEmissionTargetId': string
}
export class IndexItem {
  'id'?: string
  'createDate': string
  'lastModifiedDate': string
  'createBy': string
  'lastModifiedBy': string
  'tenant': string
  'cycle': string
  'name': string
  'del': number
  children: IndexItemTarget[] = []
}
/**
 * 常量
 */
const url = '/ecp-cloud-system/index-item'

/**
 * 接口包装
 */
export const IndexItemApi = {
  list(params: Record<string, any>) {
    return http.get<PageList<IndexItem>>(url, params)
  },
  one(id: string) {
    return http.get<IndexItem>(`${url}/${id}`)
  },
  create(person: IndexItem) {
    return http.post<IndexItem>(url, person)
  },
  update(person: IndexItem) {
    if (person.id) {
      return http.put<IndexItem>(`${url}/${person.id}`, person)
    } else {
      return Promise.resolve('没有id')
    }
  }
}
