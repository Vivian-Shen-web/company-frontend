import CfCheckbox from './CfCheckbox.vue'
import CfDate from './CfDate.vue'
import CfInput from './CfInput.vue'
import CfNumber from './CfNumber.vue'
import CfRadio from './CfRadio.vue'
import CfSelect from './CfSelect.vue'
import CfSwitch from './CfSwitch.vue'
import CfText from './CfText.vue'
import CfProperties from './CfProperties.vue'
import CfPassword from './CfPassword.vue'
import type { Component } from 'vue'
import CfTextarea from './CfTextarea.vue'
import CfDateRange from './CfDateRange.vue'
import CfTime from './CfTime.vue'
import CfTimeRange from './CfTimeRange.vue'
import CfSlider from './CfSlider.vue'
import CfRate from './CfRate.vue'
import CfGroup from './CfGroup.vue'
import CfArrayMultiple from './CfArrayMultiple.vue'
import CfDivider from './CfDivider.vue'
import CfTitle from './CfTitle.vue'

export const componentMap: Record<string, Component> = {
  checkbox: CfCheckbox,
  date: CfDate,
  input: CfInput,
  number: CfNumber,
  radio: CfRadio,
  select: CfSelect,
  switch: CfSwitch,
  text: CfText,
  properties: CfProperties,
  password: CfPassword,
  textarea: CfTextarea,
  dateRange: CfDateRange,
  time: CfTime,
  timeRange: CfTimeRange,
  slider: CfSlider,
  rate: CfRate,
  group: CfGroup,
  arrayMultiple: CfArrayMultiple,
  divider: CfDivider,
  title: CfTitle
}
