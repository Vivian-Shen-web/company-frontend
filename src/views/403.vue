<route lang="json">
{
  "meta": {
    "title": "403"
  }
}
</route>
<script lang="ts" setup>
import { THEME_KEY } from '@/enums/cacheEnum'
import { ref, onBeforeMount } from 'vue'

import StorageFactory from '@/utils/storage'

const storage = StorageFactory.getStorage()
type Theme = 'light' | 'dark' | 'realDark'

const theme = ref<Theme>('light')
onBeforeMount(() => {
  theme.value = ((storage.getItemObj(THEME_KEY) || {})?.navTheme as Theme) || 'light'
})
</script>
<template>
  <div :class="`theme-${theme}`">
    <div class="page-bg absolute h-1/4 w-screen"></div>
    <div class="h-screen w-screen flex justify-center items-center">
      <div>
        <img src="/assets/images/noPermission.png" alt="" />
        <h1>403</h1>
        <h2>无权访问页面</h2>
        <p>您没有权限访问该页面，请联系管理员</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-light,
.theme-dark {
  background: white;
  color: black;

  .page-bg {
    background: linear-gradient(to bottom, #c3d8f7, #ffffff);
  }
}

.theme-realDark {
  background: black;
  color: white;

  .page-bg {
    background: linear-gradient(#59659b, #59659b00);
  }
}
</style>
