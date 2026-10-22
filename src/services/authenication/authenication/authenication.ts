import { http } from '@/utils'

export interface CurrentEmployee {
  name: string
  account: string
  username: string
  type: string
  employee: string
}

/**
 * 常量
 */
const url = '/authorization-sub/authentication'

/**
 * 接口包装
 */
export const AuthenticationApi = {
  getEmployeeInfo() {
    return http.get<CurrentEmployee>(url)
  },
  getByTenantCode(tenantId: string) {
    return http.get(`${url}/${tenantId}`)
  }
}
