<script setup lang="ts">
import { IconUtils } from '@/components/basic/icon'
import { h } from 'vue'
import { MenuOutlined } from '@ant-design/icons-vue'
import { EmployeeDetail } from '@/services/tenant/employee/employee'
import { reactive, ref, watch } from 'vue'
import { message } from 'ant-design-vue'
import { debounce } from '@/utils/common'

const props = withDefaults(
  defineProps<{ dropdownMatchSelectWidth?: number; maxLength?: number; list: EmployeeDetail[] }>(),
  {
    dropdownMatchSelectWidth: 300
  }
)
const isShowModal = defineModel('isShowModal', { type: Boolean })
const visible = defineModel('visible', { type: Boolean })
const selectedValue = defineModel('selectedValue', { type: Array<EmployeeDetail>, required: true })
const employee = ref<string>()

type EmployeeInfo = {
  content: EmployeeDetail
  selected: boolean
}
type EmployeeMap = {
  [key: string]: EmployeeInfo
}
let EmployeeInfoMap = reactive<EmployeeMap>({})
let timeout: any

const initList = () => {
  emits('search', undefined)
}

const handleChange = (value: any, option: any) => {
  if (value == null) return
  //   这里是增加了取消选中的逻辑,暂时不需要就先取消
  //   EmployeeInfoMap[value].selected = !EmployeeInfoMap[value].selected
  //   if (EmployeeInfoMap[value].selected) {
  //     selectedValue.value.push(EmployeeInfoMap[value].content)
  //   } else {
  //     selectedValue.value = selectedValue.value.filter((item) => {
  //       return item.id != value
  //     })
  //   }
  if (props.maxLength && selectedValue.value.length >= props.maxLength) {
    message.warning({
      content: `已达上限${props.maxLength}个`
    })
  } else {
    selectedValue.value.push(EmployeeInfoMap[value].content)
    initList()
    visible.value = false
  }
}
const emits = defineEmits(['search'])

const fetch = debounce((value: string) => {
  fetching.value = true
  EmployeeInfoMap = reactive({})
  const getSearchData = () => {
    emits('search', value)
  }
  getSearchData()
})

const fetching = ref(false)

watch(
  () => props.list,
  (newList: EmployeeDetail[]) => {
    getOptions(newList)
    markSelected(selectedValue.value)
    setTimeout(() => {
      fetching.value = false
    }, 1000)
  }
)

const getOptions = (newList: EmployeeDetail[]) => {
  if (newList.length == 0) return
  newList.forEach((item) => {
    EmployeeInfoMap[item.id as string] = {
      content: item,
      selected: false
    }
  })
}

const markSelected = (data: EmployeeDetail[]) => {
  if (!data) return
  data.forEach((selectedDate) => {
    const foundSelected = EmployeeInfoMap[selectedDate?.id as string]
    if (foundSelected) {
      foundSelected.selected = true
    }
  })
}

watch(
  () => selectedValue.value,
  (newValue: EmployeeDetail[]) => {
    markSelected(newValue)
  }
)
const clearInputValue = () => {
  employee.value = undefined
}

const icon = {
  check: IconUtils.prefix('ANTDESIGN-OUTLINED', 'check'),
  menu: IconUtils.prefix('ANTDESIGN-OUTLINED', 'menu')
}

const openMulSelecetModal = () => {
  isShowModal.value = true
  visible.value = false
}
</script>

<template>
  <APopover v-model:open="visible" placement="bottom" trigger="click">
    <template #content>
      <AFlex :align="'center'" :gap="'small'">
        <ASelect
          v-model:value="employee"
          placeholder="请选择人员"
          @search="fetch($event)"
          :filter-option="false"
          :dropdownMatchSelectWidth="props.dropdownMatchSelectWidth"
          show-search
          allowClear
          ref="select"
          :show-arrow="false"
          @select="handleChange"
          @blur="clearInputValue()"
          :defaultActiveFirstOption="false"
        >
          <ASelectOption
            v-for="item in EmployeeInfoMap"
            :key="item.content.id"
            :value="item.content.id"
            class="mb-1"
          >
            <!-- 可拓展样式 -->
            <div class="flex items-center justify-between w-full">
              <div>
                {{
                  item.content.name +
                  '/' +
                  (item.content.department?.name ? item.content.department?.name : '暂无部门')
                }}
              </div>
              <!-- <IqIcon v-if="item.selected" :icon="icon.check" class="text-sky-500"></IqIcon> -->
            </div>
          </ASelectOption>
          <template v-if="list.length === 0" #notFoundContent>
            <ASpin v-if="fetching" size="small" />
            <AEmpty v-else></AEmpty>
          </template>
        </ASelect>
        <AButton :icon="h(MenuOutlined)" @click="openMulSelecetModal()"></AButton>
      </AFlex>
    </template>
    <slot name="btn"></slot>
  </APopover>
</template>

<style scoped lang="scss">
//  Todo 选中细节
// .selected-employee {
//     @apply bg-sky-400 pb-1;
// }
</style>
@/services/tenant/employee/employee
