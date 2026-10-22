<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { findIndex } from 'ramda'
import message from 'ant-design-vue/es/message'
const searchTerm = ref<string>('')
const originList = ref<IdEntity[]>([])
let selectedMap: Record<string, boolean> = reactive({})

const props = defineProps({
  originData: {
    type: Array<IdEntity>,
    default: () => []
  },
  title: {
    type: String,
    default: '分配人员'
  },
  searchTitle: {
    type: String,
    default: '搜索标题'
  },
  searchPlaceHolder: {
    type: String,
    default: '请输入姓名或者账户查询'
  },
  width: {
    type: String,
    default: '700'
  },
  isShowSearch: {
    type: Boolean,
    default: true
  },
  maxLength: {
    type: Number
  },
  loading: {
    type: Boolean,
    default: false
  },
  confirmLoading: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['search', 'cancel', 'ok'])

const open = defineModel('open', { default: false })
const selectedList = defineModel('selectedData', { type: Array<IdEntity>, default: () => [] })

watch(
  () => props.originData,
  (newVal) => {
    originList.value = [...newVal]
  }
)

watch(
  () => selectedList.value,
  (newVal) => {
    selectedMap = reactive({})
    newVal.forEach((item) => {
      selectedMap[item?.id] = true
    })
  },
  { immediate: true }
)

watch(
  () => open.value,
  (newValue) => {
    if (newValue) {
      selectedMap = reactive({})
      selectedList.value.forEach((item) => {
        selectedMap[item.id] = true
      })
    }
  }
)

const removeItem = (data: IdEntity) => {
  selectedMap[data.id] = false
  let index = selectedList.value.indexOf(data)
  selectedList.value.splice(index, 1)
}

const changeSelect = (item: IdEntity) => {
  let flag = selectedMap[item.id]

  if (flag) {
    if (props.maxLength && selectedList.value.length == props.maxLength) {
      message.warning({ content: '最多选择' + props.maxLength + '个' })
    } else {
      selectedList.value.push(item)
    }
  } else {
    let index = findIndex((x: any) => {
      return item.id == x.id
    }, selectedList.value)
    if (index != -1) {
      selectedList.value.splice(index, 1)
    }
  }
}

const handleOk = () => {
  emits('ok')
}

const handleCancel = () => {
  searchTerm.value = ''
  emits('cancel')
}

const handleSearch = () => {
  emits('search', searchTerm.value)
}
</script>

<template>
  <AModal
    v-model:open="open"
    :width="props.width + 'px'"
    :title="props.title"
    @ok="handleOk()"
    :confirm-loading="props.confirmLoading"
    cancelText="取消"
    okText="确定"
    @cancel="handleCancel()"
  >
    <ADivider />
    <div class="px-7">
      <AFlex gap="middle" horizontal class="mb-5" v-if="props.isShowSearch">
        <div class="leading-normal text-nowrap flex items-center">{{ props.searchTitle }}</div>
        <AInput
          v-model:value="searchTerm"
          @input="handleSearch()"
          :placeholder="props.searchPlaceHolder"
        />
      </AFlex>
      <AFlex horizontal justify="space-between" class="h-80 gap-x-6">
        <div class="flex-1 overflow-auto">
          <AList :split="false" size="small" :data-source="originList" :loading="loading">
            <template #renderItem="{ item }">
              <AListItem>
                <ACheckbox v-model:checked="selectedMap[item.id]" @change="changeSelect(item)">
                  <div class="max-w-[250px] overflow-hidden text-ellipsis text-nowrap">
                    <slot name="left" :item="item"></slot>
                  </div>
                </ACheckbox>
              </AListItem>
            </template>
          </AList>
        </div>
        <div class="flex-1 overflow-auto border-solid border border-gray">
          <AList :split="false" size="small" :data-source="selectedList">
            <template #renderItem="{ item }">
              <AListItem>
                <div
                  class="max-w-[250px] overflow-hidden text-ellipsis text-nowrap bg-sky-200 mr-[6px]"
                >
                  <slot name="right" :item="item"></slot>
                </div>
                <AButton danger type="text" size="small" shape="circle" @click="removeItem(item)"
                  >X</AButton
                >
              </AListItem>
            </template>
          </AList>
        </div>
      </AFlex>
    </div>
    <ADivider />
  </AModal>
</template>

<style lang="scss" setup></style>
