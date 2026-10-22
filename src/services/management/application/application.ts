import { http } from '@/utils'

export interface Application {
  description: string
  name: string
  code: string
  scope: string[]
}

const url = 'management/application'

export const ApplicationApi = {
  page(p: Record<string, any>) {
    return http.get<PageList<Application>>(url, p)
  },
  one(id: string) {
    return http.get<Application>(`${url}/${id}`)
  },
  create(application: Application) {
    return http.post<Application>(url, application)
  }
}
