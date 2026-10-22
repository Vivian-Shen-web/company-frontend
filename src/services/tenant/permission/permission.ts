import ApplicationConfig from '@/configs/application'
import { http } from '@/utils'
import { find, propEq } from 'ramda'
/**
 * 接口返回
 */

interface ResourceList {
  applications: Application[]
}

/**
 * 类
 */
export class PermissionOverview {
  'code'?: string
  'feature': Feature = new Feature()
  'permission'?: string
}

export class Feature {
  'children'?: []
  'description'?: string
  'hidden'?: boolean
  'icon'?: string
  'leaf'?: boolean
  'meta'?: string
  'order'?: number
  'parent'?: string
  'path'?: string
  'root': boolean
}

export class Application {
  [key: string]: any
  'application': string = ''
  'menus': PermissionOverview[] = []
  'elements': PermissionOverview[] = []
  'apis': PermissionOverview[] = []
  'datas': PermissionOverview[] = []
}

export class Permission {
  'id'?: string
  'createDate'?: string
  'lastModifiedDate'?: string
  'createBy'?: string
  'lastModifiedBy'?: string
  'tenant'?: string
  'code': string
  'name': string
}

export class SearchForm {
  'application'?: string
  'type'?: string = 'menus'
}

export class bindResourceForm {
  'permissionCode': string = ''
  'resourceCode': string[] = []
}

/**
 * 常量
 */
const url = '/tenant/permission'

/**
 * 函数方法
 */

const convertToTree = (permission: PermissionOverview[]) => {
  return permission.map((permission) => ({
    key: permission.code || '', // 使用 code 属性作为节点的键
    value: permission.code || '',
    description: permission.feature.description,
    children: [] // 初始为空数组
  }))
}

const applicationToTree = (application: any) => {
  const tree: any[] = []
  // 遍历除了 application 属性之外的其它属性
  for (const key of Object.keys(application).filter((k) => k !== 'application')) {
    // 获取属性值并转换为树结构
    const node = {
      key: resourceCategory[key],
      value: key,
      selectable: false,
      checkable: false,
      children: convertToTree(application[key] as PermissionOverview[])
    }
    tree.push(node) // 将树节点添加到树结构中
  }
  return tree
}

type firstLevelType = {
  [key: string]: string
  menus: string
  elements: string
  apis: string
  datas: string
}

const resourceCategory: firstLevelType = {
  menus: '菜单资源',
  elements: '页面元素资源',
  apis: 'api资源',
  datas: '数据资源'
}

/**
 * 接口包装
 */
export const PermissionApi = {
  list(par?: Record<string, any>) {
    return http.get<PageList<Permission[]>>(url, par)
  },
  one(permissionCode: string) {
    return http.get<ResourceList>(`${url}/${permissionCode}`).then((res) => {
      const application = find(propEq(ApplicationConfig.code, 'application'))(
        res.data.applications
      ) as Application
      return application
    })
  },
  create(permission: Permission) {
    return http.post<Permission>(url, permission)
  },
  delete(permissionCode: string) {
    if (permissionCode) {
      return http.delete(`${url}/${permissionCode}`)
    } else {
      return Promise.resolve('不存在id')
    }
  },
  bindResource(params: bindResourceForm) {
    if (params.permissionCode) {
      return http.put(`${url}/${params.permissionCode}/resource`, params)
    } else {
      return Promise.resolve('不存在id')
    }
  },
  getUserPermission(uid: string) {
    return http.get<ResourceList>(`${url}/user/${uid}`)
  },
  getPermissionResource() {
    return http.get<ResourceList>(`${url}/resource`).then((res) => {
      const application = find(propEq(ApplicationConfig.code, 'application'))(
        res.data.applications
      ) as Application
      return applicationToTree(application)
    })
  },
  getRolePermissions(roleId: string) {
    return http.get<Permission[]>(`${url}/${roleId}/permission`).then((res) => {
      const result: any = []
      res.data.map((item) => {
        result.push(item.code)
      })
      return result
    })
  }
}
