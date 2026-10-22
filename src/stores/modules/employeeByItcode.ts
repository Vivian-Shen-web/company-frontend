import store from '..'
import { EmployeeApi, EmployeeDetail } from '@/services/tenant/employee/employee'
import { useCacheStore } from './cache'

const producer: (itcode: string) => Promise<EmployeeDetail> = (itcode: string) => {
  return EmployeeApi.getEmployeeDetaillByCode(itcode).then((hr) => {
    if (hr.code == 200) {
      return hr.data
    }
    throw hr
  })
}

export const useEmployeeByItcodeStore = useCacheStore('employeeByItcode', producer)

export function useEmployeeByItcodeWithOut() {
  return useEmployeeByItcodeStore(store)
}
