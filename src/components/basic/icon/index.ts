import { curry } from 'ramda'

export { default as IconPicker } from './src/IconPicker.vue'
export { default as SvgIcon } from './src/SvgIcon.vue'
export { default as IqIcon } from './IqIcon.vue'
export { default as IconFont } from './src/icon-font'

export * from './src/props'

export { setupIcons } from './src/icons.data'

export const IconUtils = {
  prefix: curry((apitype: 'ANTDESIGN-OUTLINED', icon: string) => {
    const prefix = { 'ANTDESIGN-OUTLINED': 'ant-design:' }
    const postfix = { 'ANTDESIGN-OUTLINED': '-outlined' }
    return (prefix[apitype] || '') + icon + (postfix[apitype] || '')
  })
}
