<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import FactoryContent from './components/FactoryContent.vue'
import FactoryHero from './components/FactoryHero.vue'

defineOptions({
  name: 'QsdFactoryPage'
})
</script>

<template>
  <QsdLayout>
    <FactoryHero />
    <FactoryContent />
  </QsdLayout>
</template>
