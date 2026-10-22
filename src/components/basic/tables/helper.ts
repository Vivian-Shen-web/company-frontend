import dayjs from 'dayjs'
import { isNil } from 'ramda'
import { h } from 'vue'

interface COLUMN_DATE {
  type: 'date'
}
interface COLUMN_DATETIME {
  type: 'datetime'
}
interface COLUMN_LONGTXT {
  type: 'longtxt'
  width: number
}
interface COLUMN_MAP {
  type: 'map'
  map: Record<string, any>
}
interface COLUMN_NUMBER {
  type: 'number'
  fixed?: number
  percentage?: boolean
  unit?: string
}
interface COLUMN_CURRENCY {
  type: 'currency'
}
interface COLUMN_I18N {
  type: 'i18n'
}

type Config =
  | COLUMN_DATE
  | COLUMN_DATETIME
  | COLUMN_LONGTXT
  | COLUMN_MAP
  | COLUMN_NUMBER
  | COLUMN_CURRENCY
  | COLUMN_I18N

const numberHander = (data: number, config: COLUMN_NUMBER) => {
  let _str = ''
  let _data = Number(data)
  if (isNaN(_data)) {
    _str = '-'
  } else {
    if (config.percentage) {
      _data *= 100
    }
    _str = thousandsComma(isNil(config.fixed) ? _data : _data.toFixed(config.fixed))
  }
  if (config.unit) {
    _str += ' ' + config.unit
  }
  return _str
}

const thousandsComma = (num: number | string) => {
  let [integer, decimal] = num.toString().split('.')
  const doSplit = (num: string[], isInteger = true) => {
    const mod = isInteger ? (num.length % 3) - 1 : 2
    const str = num.map((data, index) => {
      if (index == num.length - 1) {
        return data //最后一位不出现逗号
      }
      const comma = index % 3 == mod ? ',' : ''
      return data + comma
    })
    return str.join('')
  }
  integer = doSplit(integer.split(''))
  decimal = decimal ? '.' + doSplit(decimal.split(''), false) : ''
  return integer + decimal
}

export const columnCustomer = (data: any, config: Config) => {
  switch (config.type) {
    case 'currency': //TODO:金额处理
      return numberHander(data, { type: 'number', fixed: 2 })
    case 'number':
      return numberHander(data, config)
    case 'date':
      return dayjs(data).format('YYYY-MM-DD')
    case 'datetime':
      return dayjs(data).format('YYYY-MM-DD HH:mm:ss')
    case 'longtxt':
      return h(
        'span',
        { class: 'not-too-long', title: data, style: `width:${config.width}px` },
        data
      )
    case 'map':
      return config.map[data]
    case 'i18n':
      //TODO: i18n处理
      return data
  }
}
