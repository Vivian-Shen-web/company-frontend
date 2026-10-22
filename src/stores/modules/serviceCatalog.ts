import {
  ServiceCatalog,
  ServiceCatalogApi
} from '@/services/service-catalog/serviceCatalog/serviceCatalog'
import store from '..'
import { useCacheStore } from './cache'

const producer: (id: string) => Promise<ServiceCatalog> = (id: string) => {
  return ServiceCatalogApi.one(id).then((hr) => {
    if (hr.code == 200) {
      return hr.data
    }
    throw hr
  })
}

export const useServiceCatalogStore = useCacheStore('ServiceCatalog', producer)

export function useServiceCatalogStoreWithOut() {
  return useServiceCatalogStore(store)
}
