<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<!-- 文件描述 -->
<script setup lang="ts">
import { ref } from 'vue'
import type { TypeProperties } from '../customForm'
import { keys } from 'ramda'
import { computed } from 'vue'
import { watch } from 'vue'

const props = defineProps<{ formItem: TypeProperties }>()
let storeV: Record<string, string> = { '': '' }

const model = defineModel<Record<string, string> | string>('value', {
  default: {}
})
const list = ref<{ key: string; value: string }[]>([])

const same = (o: Record<string, string>, n: Record<string, string>) => {
  const kos = keys(o)
  const kns = keys(n)
  if (kos.length != kns.length) {
    return false
  }
  const diff = kos.filter((k) => {
    return kns.indexOf(k) < 0 || o[k] !== n[k]
  })
  return diff.length < 1
}
watch(
  model,
  (newValue) => {
    let l: { key: string; value: string }[] = []

    let obj!: Record<string, string>
    if (newValue == null) {
      obj = {}
    } else if (props.formItem.props.modelType == 'string') {
      try {
        obj = JSON.parse(newValue.toString())
      } catch (e) {
        obj = {}
      }
    } else {
      obj = model.value as Record<string, string>
    }
    if (same(storeV, obj)) {
      return
    }
    l = keys(obj).map((key) => {
      return {
        key,
        value: obj[key]
      }
    })
    if (l.length < 1) {
      l.push({ key: '', value: '' })
    }
    list.value = l
  },
  { immediate: true }
)

const change = () => {
  storeV = {}
  for (let i = 0; i < list.value.length; i++) {
    if (list.value[i].key && list.value[i].value) {
      storeV[list.value[i].key] = list.value[i].value
    }
  }
  if (props.formItem.props.modelType == 'string') {
    model.value = JSON.stringify(storeV)
  } else {
    model.value = storeV
  }
}
</script>

<template>
  <AFormItemRest>
    <table>
      <tr v-for="(item, index) in list" :key="index">
        <td><AInput v-model:value="item.key" @change="change"></AInput></td>
        <td><AInput v-model:value="item.value" @change="change"></AInput></td>
      </tr>
      <tr>
        <td rowspan="2">
          <AButton @click="list.push({ key: '', value: '' })">
            <IqIcon icon="ant-design:plus-circle-outlined"></IqIcon>添加
          </AButton>
        </td>
      </tr>
    </table>
  </AFormItemRest>
</template>

<style scoped lang="scss"></style>
