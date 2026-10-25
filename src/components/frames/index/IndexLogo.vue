<script setup lang="ts">
defineOptions({
  name: 'IndexLogo'
})

import { theme } from 'ant-design-vue'

const { useToken } = theme
const { token } = useToken()
</script>

<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="" />
    <h2 class="title" :style="{ color: token.colorPrimary }">QSD Electric Autos</h2>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  @apply flex overflow-hidden whitespace-nowrap items-center;

  height: 64px;
  padding-left: 24px;
  line-height: 64px;

  img {
    height: 40px;
    margin-right: 15px;
  }

  .title {
    @apply mb-0 text-xl;
  }
}
</style>
