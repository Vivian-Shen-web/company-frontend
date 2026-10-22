<script lang="ts" setup>
/**
 * 用于页面块上方的标题描述，按钮控制等
 */
defineOptions({
  name: 'ContentHeader'
})
const props = defineProps<{
  title?: string
  btns?: IqButtonProps[]
}>()
</script>

<template>
  <APageHeader class="pt-0 pl-0 pr-0" :title="props.title">
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #extra>
      <slot name="beforeBtn"></slot>
      <AButton
        v-for="(item, index) in btns"
        :type="item.type"
        :key="index"
        @click="item.fn()"
        :danger="item.danger"
        :disabled="item.disabled"
      >
        <IqIcon v-if="item.icon" :icon="item.icon"></IqIcon>
        {{ item.label }}
      </AButton>
    </template>
  </APageHeader>
</template>

<style scoped lang="scss"></style>
