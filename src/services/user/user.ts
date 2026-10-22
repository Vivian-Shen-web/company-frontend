import { http } from '@/utils'
/**
 * 类
 */
export class User {
  id: string = '1'
  name: string = '刘'
  account: string = 'liu'
}
/**
 * 常量
 */
const url = '/demo/user'

/**
 * 接口包装
 */
export const UserApi = {
  list(params: Record<string, any>) {
    return http.get<HttpResult<PageList<User>>>(url, params)
  },
  one(id: string) {
    return http.get<HttpResult<User>>(`${url}/${id}`)
  },
  create(person: User) {
    return http.post<HttpResult<User>>(url, person)
  },
  update(person: User) {
    if (person.id) {
      return http.put<HttpResult<User>>(`${url}/${person.id}`, person)
    } else {
      return Promise.resolve('没有id')
    }
  }
}
