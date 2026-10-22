import antdLocale from 'ant-design-vue/es/locale/zh_CN'

const folder = './zh_CN/'
//TODO: 从文件中获取
const data = import.meta.glob(`./zh_CN/**/*.json`, { eager: true })

type I18nSubItem =
  | {
      [P in string]: I18nItem
    }
  | string
type I18nItem = Record<string, I18nSubItem>

const map: I18nItem = {
  serviceCategory: 'Service Category'
}

for (const key in data) {
  Object.assign(map, (data[key] as Record<string, any>)['default'])
}

export default {
  message: {
    ...map,
    antdLocale
  }
}
