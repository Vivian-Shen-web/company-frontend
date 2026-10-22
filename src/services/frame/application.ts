import ApplicationConfig from '@/configs/application'
import { http } from '@/utils'
import { loopTreeCurry } from '@/utils/tree.util'
import { compose, filter, find, isNil, map, prop, propEq, sortBy } from 'ramda'

// interface Menu{
//     meta:Record<string,any>
//     description:string
//     path:string
//     icon:string
//     children:Menu[]
// }
export interface Resource {
  application: string
  code: string
  description: string
}
export interface MenuResource extends Resource {
  parent: string
  path: string
  icon: string
  hidden: boolean
  order: number
  meta: any
  leaf: boolean
  root: boolean
  children?: MenuResource[]
}
export interface ElementResource extends Resource {
  selector: string
  container: string
  attribute: string
  selectorType: 'ID'
}
export interface ApiResource extends Resource {
  host: string
  url: string
  httpMethod: string
  paramMap: Record<string, string>
  headers: Record<string, string>
  cookies: Record<string, string>
  data: string
  dataType: 'FORM_DATA'
}

interface ResourceItem {
  code: string
  resource: MenuResource | ElementResource | ApiResource
}
interface Application {
  code: string
  name: string
  resource: {
    menu: ResourceItem[]
    api: []
    element: []
  }
}
interface Authentication {
  applications: Application[]
  // role: string[]
}

const resourceUrl = 'tenant/permission/resource'
export const ApplicationApi = {
  menu() {
    //TODO store
    return http
      .get<Authentication>(resourceUrl)
      .then((res) => {
        console.log(res.data.applications)
        const application = find(propEq(ApplicationConfig.code, 'code'))(
          res.data.applications
        ) as Application
        if (null == application) {
          throw 'no matched application'
        }
        return application?.resource.menu
      })
      .then(
        (mrs) => {
          const propNil = compose(isNil, prop('parent'))
          const filterSort = compose(sortBy(prop('order')), filter(propEq(false, 'hidden'))) //每层排序,隐藏

          const list: MenuResource[] = filterSort(mrs.map(prop('resource'))).filter(
            propNil
          ) as MenuResource[]

          loopTreeCurry((node: any, level: number) => {
            if (node.children) {
              node.children = filterSort(node.children)
            }
            // const meta = node.meta ? node.meta : {};
            // node.exactMatch = meta.exactMatch;
            node.level = level + 1
            // if (node.path) {
            //   node.selected = node.exactMatch ? this.path == node.path : this.path.indexOf(node.path) >= 0
            //   node.open = node.exactMatch ? this.path == node.path : this.path.indexOf(node.path) >= 0
            // }
          })(list)
          return list.concat(devMenu)
        },
        (err: any) => {
          console.log(err)
          return devMenu
        }
      )
  }
}

const devMenu = [
  {
    code: 'tenant-manage',
    description: '租户管理',
    parent: null,
    path: '/admin/tenant/',
    icon: 'solution'
  },
  {
    code: 'application-manage',
    description: '应用管理',
    parent: null,
    path: '/admin/application/',
    icon: 'appstore-add'
  },
  {
    code: 'service-catalog',
    description: '服务目录',
    parent: null,
    path: '/admin/servicecatalog/',
    icon: 'appstore-add'
  },
  {
    code: 'notice-manage',
    description: '公告管理',
    parent: null,
    path: '/admin/notice/',
    icon: 'appstore-add',
    children: [
      {
        code: 'notice-msg',
        description: '公告管理',
        parent: null,
        path: '/admin/notice/msg/',
        icon: 'appstore-add'
      },
      {
        code: 'notice-slide',
        description: '轮播图',
        parent: null,
        path: '/admin/notice/slide/',
        icon: 'appstore-add'
      },
      {
        code: 'notice-type',
        description: '公告类型',
        parent: null,
        path: '/admin/notice/type/',
        icon: 'appstore-add'
      }
    ]
  },
  {
    code: 'service-team',
    description: '服务团队',
    parent: null,
    path: '/admin/serviceteam/',
    icon: 'appstore-add',
    children: [
      {
        code: 'service-team-team',
        description: '服务团队',
        parent: null,
        path: '/admin/serviceteam/team/',
        icon: 'appstore-add'
      },
      {
        code: 'service-team-role',
        description: '团队角色',
        parent: null,
        path: '/admin/serviceteam/role/',
        icon: 'appstore-add'
      }
    ]
  },
  {
    code: 'inspection-manage',
    description: '巡检管理',
    parent: null,
    path: '/admin/inspection/inspection-config',
    icon: 'appstore-add',
    children: [
      {
        code: 'inspection-report',
        description: '巡检填报',
        parent: null,
        path: '/admin/inspection/report/',
        icon: 'appstore-add'
      },
      {
        code: 'inspection-approval',
        description: '巡检审批',
        parent: null,
        path: '/admin/inspection/approval/',
        icon: 'appstore-add'
      },
      {
        code: 'inspection-config',
        description: '巡检配置',
        parent: null,
        path: '/admin/inspection/inspection-config/',
        icon: 'appstore-add'
      }
    ]
  },
  {
    code: 'management-organization',
    description: '组织信息',
    parent: null,
    path: '/admin/organization/',
    icon: 'appstore-add'
  },
  {
    code: 'management-psnorg',
    description: '组织结构管理',
    parent: null,
    path: '/admin/systemmanage/',
    icon: 'appstore-add',
    children: [
      {
        code: 'management-employee',
        description: '用户管理',
        parent: null,
        path: '/admin/systemmanage/employee/',
        icon: 'appstore-add'
      },
      {
        code: 'management-department',
        description: '部门管理',
        parent: null,
        path: '/admin/systemmanage/department/',
        icon: 'appstore-add'
      },
      {
        code: 'management-role',
        description: '角色管理',
        parent: null,
        path: '/admin/systemmanage/role',
        icon: 'appstore-add'
      },
      {
        code: 'management-permission',
        description: '权限管理',
        parent: null,
        path: '/admin/systemmanage/permission/',
        icon: 'appstore-add'
      }
    ]
  },
  {
    code: 'work-time',
    description: '工作时间',
    parent: null,
    path: '/admin/work-time/0',
    icon: 'appstore-add'
  },
  {
    code: 'contact-it',
    description: '联系IT',
    parent: null,
    path: '/admin/contact-it',
    icon: 'appstore-add'
  }
] as unknown as MenuResource[]
