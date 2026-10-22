import type { Component, Slot, VNode } from 'vue'
import type { Dayjs } from 'dayjs'
export interface BaseProperties {
  label: string | undefined
  name: string
  type: string | Component
  disabled?: boolean
  placeholder?: string //占位符
  width?: number //24分之几
  icon: string
}

export interface TypeSwitch extends BaseProperties {
  type: 'switch'
}
export interface TypeInput extends BaseProperties {
  type: 'input'
}
export interface TypeInputPassword extends BaseProperties {
  type: 'password'
}
export interface TypeTextarea extends BaseProperties {
  type: 'textarea'
}

export interface TypeNumber extends BaseProperties {
  type: 'number'
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
}

// Todo 这里要结合timepicker的属性来写,datepicker和timepicker是结合起来的
export type TypeDateShowTime = {
  defaultValue?: Dayjs
}
export interface TypeDatepicker extends BaseProperties {
  type: 'date'
}
export type TypeDateRangeShowTime = {
  defaultValue?: [Dayjs, Dayjs]
}
export interface TypeDateRangepicker extends Omit<BaseProperties, 'placeholder'> {
  type: 'dateRange'
  placeholder?: string[]
}
export interface TypeTimepicker extends BaseProperties {
  type: 'time'
}
export interface TypeTimeRangepicker extends Omit<BaseProperties, 'placeholder'> {
  type: 'timeRange'
  placeholder?: [string, string]
}
export interface TypeCheckbox extends BaseProperties {
  type: 'checkbox'
  props: TypeBaseSelectProps
}
export interface TypeRadio extends BaseProperties {
  type: 'radio'
}
export interface TypeProperties extends BaseProperties {
  type: 'properties'
}
export interface TypeSlider extends BaseProperties {
  type: 'slider'
}
export interface TypeRate extends BaseProperties {
  type: 'rate'
}
export interface TypeImageUpload extends BaseProperties {
  type: 'imageupload'
}

export interface TypeGroup extends BaseProperties {
  type: 'group'
}
export interface TypeArrayMultiple extends BaseProperties {
  type: 'arrayMultiple'
}
export interface TypeArraySingle extends BaseProperties {
  type: 'arraySingle'
}
export interface TypeDivider {
  label: ''
  type: 'divider'
  name: string
  width?: number //24分之几
  disabled?: string
}
export interface TypeTitle {
  label: ''
  type: 'title'
  name: string
  width?: number //24分之几
  disabled?: string
}
export type CustomLeftForm =
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
  | TypeArraySingle
  | TypeDivider
  | TypeTitle
