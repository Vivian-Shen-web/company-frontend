declare global {
  type I18n = {
    [p in LocaleType]: string
  }



}

interface IdEntity{
  id:string,
  [key: string]: any
}

interface HttpResult<T>{
  msg:string,
  code:number,
  data:T,
  success:boolean
}

/**
 * 页码，页数
 */
interface Pager{
  page: number
  size: number
}
/**
* 分页器对象
*/
interface Pagination extends Pager{
  totalElements: number
  totalPages: number
}
/**
 * 列表请求返回对象
 */
interface PageList<T> extends Pagination{
  content: T[]
}

interface TreeNode {
  title:string,
  key:string,
  order:number,
  isLeaf:boolean,
  disabled?:boolean,
  selectable?:boolean,
  meta?:Record<string,any>,
  children:TreeNode[]
}

/**
 * 从ant-design-vue ButtonProps提炼，用来定义内部按钮参数
 *
 */
type IqButtonProps = {
  label: string,//标签
  type: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  shape: 'default'| 'circle' |'round',
  danger: boolean,//是否加上危险标记 红框
  disabled: boolean, //是否禁用
  icon: string,
  fn:(...argv:any)=>void //按钮触发方法
}
