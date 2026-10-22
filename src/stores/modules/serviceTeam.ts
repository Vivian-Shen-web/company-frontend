import { ServiceTeamApi, ServiceTeamVO } from '@/services/service-catalog/serviceTeam/serviceTeam'
import store from '..'
import { useCacheStore } from './cache'

const producer: (code: string) => Promise<ServiceTeamVO> = (code: string) => {
  return ServiceTeamApi.getServiceTeamDetail(code).then((hr) => {
    if (hr.code == 200) {
      return hr.data
    }
    throw hr
  })
}

export const useServiceTeamStore = useCacheStore('serviceTeam', producer)

export function useServiceTeamStoreWithOut() {
  return useServiceTeamStore(store)
}
