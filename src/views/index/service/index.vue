<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import QsdLocatorPage from '@/components/qsd/QsdLocatorPage.vue'

defineOptions({
  name: 'QsdServicePage'
})
</script>

<template>
  <QsdLayout>
    <QsdLocatorPage current="Service locator" hero-image="u1081.png" partner-type="service" />
  </QsdLayout>
</template>
