<script setup lang="ts">
import { computed, ref } from 'vue'
import { columnCustomer } from './helper'

const props = defineProps<{
  btns: IqButtonProps[]
}>()

columnCustomer(1, { type: 'currency' })
const btns = computed(() => {
  const length = props.btns.length
  return props.btns.map((btn, index) => {
    if (length > 1 && index == 0) {
      btn.type = btn.type || 'primary'
    }
    return { ...btn }
  })
})
</script>

<template>
  <ASpace>
    <template v-for="btn in btns" :key="btn.data">
      <AButton
        :type="btn.type"
        @click="btn.fn"
        size="small"
        :title="$t(btn.label)"
        :danger="btn?.danger"
        :disabled="btn?.disabled"
      >
        <IqIcon v-if="btn.icon" :icon="btn.icon"></IqIcon>
        <!-- {{btn.label}} -->
      </AButton>
    </template>
  </ASpace>
</template>

<style scoped lang="scss"></style>
../icon
