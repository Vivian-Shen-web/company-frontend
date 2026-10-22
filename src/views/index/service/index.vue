<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import LocatorPage from './components/LocatorPage.vue'

defineOptions({
  name: 'QsdServicePage'
})
</script>

<template>
  <QsdLayout>
    <LocatorPage title="Service locator" current="Service locator" />
  </QsdLayout>
</template>
