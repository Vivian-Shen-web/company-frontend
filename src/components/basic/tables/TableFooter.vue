<script setup lang="ts">
import { computed, ref } from 'vue'
import { columnCustomer } from './helper'

const model = defineModel<Pagination>()
</script>

<template>
  <div></div>
  <!-- <APagination
        size="small"
        v-model:pageSize="model?.size"
        v-model:current="pager.page"
        :total="pager.totalElements"
        show-size-changer
        show-quick-jumper
        :show-total="(total: number) => `总计 ${total} 条`"
    /> -->
</template>

<style scoped lang="scss"></style>
