import { http } from '@/utils'
/**
 * 类
 */
export class Role {
  'description': string = ''
  'code': string = ''
  'name': string = ''
}
/**
 * 常量
 */
const url = '/tenant/role'

/**
 * 接口包装
 */
export const RoleApi = {
  list(par: Record<string, any>) {
    return http.get<PageList<Role[]>>(url, par)
  },
  create(role: Role) {
    return http.post<Role>(url, role)
  },
  update(role: Role) {
    if (role.code) {
      return http.put<Role>(`${url}/${role.code}`, role)
    } else {
      return Promise.resolve('没有code')
    }
  },
  delete(roleCode: string) {
    if (roleCode) {
      return http.delete<Role>(`${url}/${roleCode}`)
    } else {
      return Promise.resolve('没有code')
    }
  },
  getRoleEmployees(roleCode: string) {
    return http.get<string[]>(`${url}/${roleCode}/user`).then((res) => {
      const result = res.data.map((item) => {
        return { id: item }
      })
      return result
    })
  }
}
