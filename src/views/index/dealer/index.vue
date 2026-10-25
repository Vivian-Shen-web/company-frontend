<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import QsdLocatorPage from '@/components/qsd/QsdLocatorPage.vue'

defineOptions({
  name: 'QsdDealerPage'
})
</script>

<template>
  <QsdLayout>
    <QsdLocatorPage current="Dealer locator" hero-image="u1022.png" map-image="u1018.png" />
  </QsdLayout>
</template>
