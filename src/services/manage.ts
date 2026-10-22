import { http } from '@/utils'
/**
 * 类
 */
export class Manage {
  'userName': string = ''
  'logDate': string = ''
  'status': string = ''
  'message'?: string
  'id': string = ''
}

/**
 * 常量
 */
const manageListUrl = '/xie-he/his'

/**
 * 接口包装
 */
export const manageApi = {
  manageList(params: Record<string, any>) {
    return http.post<PageList<Manage[]>>(manageListUrl, params)
  }
}
