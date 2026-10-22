import store from '..'
import { EmployeeApi, EmployeeDetail } from '@/services/tenant/employee/employee'
import { useCacheStore } from './cache'

const producer: (id: string) => Promise<EmployeeDetail> = (id: string) => {
  return EmployeeApi.one(id).then((hr) => {
    if (hr.code == 200) {
      return hr.data
    }
    throw hr
  })
  // console.log('produce', id)
  // return new Promise((res) => {
  //   setTimeout(() => {
  //     const e: Employee = new Employee()
  //     e.name = id + 'name' + Date.now()
  //     res(e)
  //   }, 2000)
  // })
}

export const useEmployeeStore = useCacheStore('employee', producer)

export function useEmployeeWithOut() {
  return useEmployeeStore(store)
}
