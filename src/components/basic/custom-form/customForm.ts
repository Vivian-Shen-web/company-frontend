import type { Component, Slot, VNode } from 'vue'
import type { Dayjs } from 'dayjs'
export interface BaseProperties {
  label: string | undefined
  name: string
  type: string | Component
  disabled?: boolean
  placeholder?: string //占位符
  width?: number //24分之几
  props?: Record<string, any>
}

export interface TypeSwitch extends BaseProperties {
  type: 'switch'
  props: {
    checkedLabel: string | undefined
    uncheckedLabel: string | undefined
    checkedValue: string | boolean | number | undefined
    uncheckedValue: string | boolean | number | undefined
    loading?: boolean
    size?: 'default' | 'small'
  }
}
export interface TypeInput extends BaseProperties {
  type: 'input'
  props: {
    maxLength?: number
    showCount?: boolean
    allowClear?: boolean
    prefix?: string | Slot
    suffix?: string | Slot
  }
}
export interface TypeInputPassword extends BaseProperties {
  type: 'password'
  props: {
    visibilityToggle?: boolean
    iconRender?: Slot
  } & Omit<TypeInput['props'], 'suffix'>
}
export interface TypeTextareaRows {
  minRows: number
  maxRows: number
}
export interface TypeTextarea extends BaseProperties {
  type: 'textarea'
  props: {
    // autosize属性名在atextarea中被弃用了
    autoSize: boolean | TypeTextareaRows
  } & Omit<TypeInput['props'], 'suffix' | 'prefix'>
}

export interface TypeNumber extends BaseProperties {
  type: 'number'
  props: {
    max?: number
    min?: number
    step?: number
    precision?: number
    addonAfter?: Slot
    addonBefore?: Slot
    prefix?: Slot
    controls?: boolean
  }
}
export type TypeOption = {
  value: String | Number
  label: String
  disabled?: boolean
}
export interface TypeBaseSelectProps {
  options: TypeOption[]
  renderOptions?: () => Promise<TypeOption[]>
}
export interface TypeSelect extends BaseProperties {
  type: 'select'
  props: TypeBaseSelectProps & {
    showSearch?: boolean
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
    allowClear?: boolean
    dropdownMatchSelectWidth?: boolean | number
    suffixIcon?: VNode | Slot
    listHeight?: number
    // combobox被ant-design-vue建议不要使用
    mode?: 'multiple' | 'tags'
    maxTagCount?: number
    maxTagTextLength?: number
    maxTagPlaceholder?: Slot | Function
  }
}

// Todo 这里要结合timepicker的属性来写,datepicker和timepicker是结合起来的
export type TypeDateShowTime = {
  defaultValue?: Dayjs
}
export interface TypeDatepicker extends BaseProperties {
  type: 'date'
  props: {
    picker: 'date' | 'week' | 'month' | 'quarter' | 'year'
    format?: string //dayjsformat这里是展示的格式样式
    showTime?: boolean | TypeDateShowTime
    valueFormat?: string //dayjsformat这里绑定值的数据的格式,没有修改的话默认是dayjs对象
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
    allowClear?: boolean
    inputReadOnly?: boolean
  }
}
export type TypeDateRangeShowTime = {
  defaultValue?: [Dayjs, Dayjs]
}
export interface TypeDateRangepicker extends Omit<BaseProperties, 'placeholder'> {
  type: 'dateRange'
  placeholder?: string[]
  props: {
    showTime?: boolean | TypeDateRangeShowTime
    separator?: string
  } & Omit<TypeDatepicker['props'], 'showTime'>
}
export interface TypeTimepicker extends BaseProperties {
  type: 'time'
  props: {
    allowClear?: boolean
    clearIcon?: VNode
    clearText?: string
    disabledHours?: () => number[] //function返回需要禁止可选的小时的数组例如：number[] = [1,2,3,4,5]
    disabledMinutes?: (selectedHour: number) => number[]
    disabledSeconds?: (selectedHour: number, selectMinute: number) => number[]
    hideDisabledOptions?: boolean
    format?: string //dayjs format格式
    hourStep?: number
    inputReadOnly?: boolean
    minuteStep?: number
    renderExtraFooter?: () => VNode
    secondStep?: number
    showNow?: boolean
    suffixIcon?: VNode
    use12Hours?: boolean
    valueFormat?: string //dayjsformat这里绑定值的数据的格式,没有修改的话默认是dayjs对象且是今天
  }
}
export interface TypeTimeRangepicker extends Omit<BaseProperties, 'placeholder'> {
  type: 'timeRange'
  placeholder?: [string, string]
  props: {
    order?: boolean
  } & Omit<
    // ant-desgin-vue提示说将在下个主版本移除这几个属性
    TypeTimepicker['props'],
    'disabledHours' | 'disabledMinutes' | 'disabledSeconds'
  >
}
export interface TypeCheckbox extends BaseProperties {
  type: 'checkbox'
  props: TypeBaseSelectProps
}
export interface TypeRadio extends BaseProperties {
  type: 'radio'
  props: TypeBaseSelectProps & {
    buttonStyle?: 'outline' | 'solid'
    size?: 'large' | 'default' | 'small'
    optionType?: 'default' | 'button'
  }
}
export interface TypeProperties extends BaseProperties {
  type: 'properties'
  props: {
    modelType?: 'string' | 'object'
  }
}
export interface TypeSlider extends BaseProperties {
  type: 'slider'
  props: {
    min?: number
    max?: number
    dots?: boolean
    range?: boolean
    reverse?: boolean
    step?: number
    // ant-desgin-vue提示tooltipVisible已废弃，使用tooltipOpen代替
    tooltipOpen?: boolean
    tooltipPlacement?:
      | 'topLeft'
      | 'top'
      | 'topRight'
      | 'rightTop'
      | 'right'
      | 'rightBottom'
      | 'bottomRight'
      | 'bottom'
      | 'bottomLeft'
      | 'leftBottom'
      | 'left'
      | 'leftTop'
    tipFormatter?: (value?: number | undefined) => any | null
    marks?: Record<number, any>
    vertical?: boolean
  }
}
export interface TypeRate extends BaseProperties {
  type: 'rate'
  props: {
    allowClear?: boolean
    allowHalf?: boolean
    character?: string | VNode
    count?: number
    tooltips?: string[]
  }
}
export interface TypeImageUpload extends BaseProperties {
  type: 'imageupload'
}

export interface TypeGroup extends BaseProperties {
  type: 'group'
  props: {
    children: CustomFormItem[]
  }
}
export interface TypeArrayMultiple extends BaseProperties {
  type: 'arrayMultiple'
  props: {
    children: CustomFormItem[]
  }
}
export interface TypeDivider {
  label: ''
  type: 'divider'
  name: string
  width?: number //24分之几
  disabled?: string
  props: {
    title?: string
    dashed?: boolean
    orientation: 'left' | 'right' | 'center'
  }
}
export interface TypeTitle {
  label: ''
  type: 'title'
  name: string
  width?: number //24分之几
  disabled?: string
  props: {
    title: string
  }
}
export interface TypeText extends BaseProperties {
  type: 'input'
  props: {
    content: string
  }
}
export type CustomFormItem =
  | BaseProperties
  | TypeSwitch
  | TypeInput
  | TypeInputPassword
  | TypeNumber
  | TypeSelect
  | TypeCheckbox
  | TypeRadio
  | TypeProperties
  | TypeImageUpload
  | TypeTextarea
  | TypeDatepicker
  | TypeDateRangepicker
  | TypeSlider
  | TypeTimepicker
  | TypeTimeRangepicker
  | TypeRate
  | TypeGroup
  | TypeArrayMultiple
  | TypeDivider
  | TypeTitle
  | TypeText
