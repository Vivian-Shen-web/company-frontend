<script lang="ts" setup>
/**
 * 用于主页面进行分区
 */

defineOptions({
  name: 'ContentBlock'
})
const props = defineProps<{
  full?: boolean
}>()
</script>

<template>
  <!-- 3rem 因为margin-6 -->
  <div class="content-block" :class="[props.full ? 'content-block-full' : '']">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.content-block-full {
  height: calc(100% - 3rem);
}
.content-block {
  @apply m-6 p-6 rounded-xl;
  background-color: var(--component-background);
}
</style>
