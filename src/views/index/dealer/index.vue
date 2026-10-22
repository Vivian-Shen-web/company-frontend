<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import LocatorPage from './components/LocatorPage.vue'

defineOptions({
  name: 'QsdDealerPage'
})
</script>

<template>
  <QsdLayout>
    <LocatorPage title="Dealer locator" current="Dealer locator" />
  </QsdLayout>
</template>
