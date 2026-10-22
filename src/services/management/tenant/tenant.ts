import { http } from '@/utils'

export interface TenantAddress {
  region: string
  province: string
  city: string
}
export const TenantStatusList = ['CREATED', 'INITED']

export interface Tenant {
  id: string
  name: string
  code: string
  domain: string
  status: 'CREATED' | 'INITED'
  address: TenantAddress
}

export interface MetaRelation {
  mainObject: string
  relaObject: string
  relation: 'INCLUDE' | 'DEPEND' | 'ASSOCIATION'
}
export interface MetaProperty {
  id: string
  name: string
  meta: string
  key: string
  content: string
  dataType: string
  checkRule: string
  order: number
}

export interface TenantInitInfo {
  id: string
  name: string
  type: {
    name: string
    processClass: string
    remark: string
  }
  key: string
  content: string
  properties: MetaProperty[]
  relations: MetaRelation[]
}
export interface PurchaseInfoApplication {
  application: string
  resourceGroup: string[]
}
export interface PurchaseInfo {
  purchase: PurchaseInfoApplication[]
}
/**
 * 常量
 */
const url = '/management/tenant'

/**
 * 接口包装
 */
export const TenantApi = {
  page(par: Record<string, any>) {
    return http.get<PageList<Tenant>>(url, par)
  },
  one(id: string) {
    return http.get<Tenant>(`${url}/${id}`)
  },
  current() {
    return http.get<Tenant>(`${url}/current`)
  },
  create(tenant: Tenant) {
    return http.post<Tenant>(url, tenant)
  },
  /**
   * 初始化租户
   */
  purchase(tenantCode: string, purchaseBody: PurchaseInfo) {
    return http.post<Tenant>(`${url}/purchased/${tenantCode}`, purchaseBody)
  },
  /**
   * 初始化租户
   */
  init(tenantCode: string, initBody: TenantInitInfo) {
    return http.post<Tenant>(`${url}/init/${tenantCode}`, initBody)
  },
  update(tenant: Tenant) {
    if (tenant.id) {
      return http.put<Tenant>(`${url}/${tenant.id}`, tenant)
    } else {
      return Promise.resolve('没有id')
    }
  }
}
