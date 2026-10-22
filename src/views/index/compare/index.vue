<script setup lang="ts">
import QsdSubHero from '@/components/qsd/QsdSubHero.vue'
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import CompareTable from './components/CompareTable.vue'

defineOptions({
  name: 'QsdComparePage'
})
</script>

<template>
  <QsdLayout>
    <QsdSubHero
      title="Side-by-side specifications"
      subtitle="* L5 figures are indicative, final specs at launch."
      current="Vehicels"
    />
    <CompareTable />
  </QsdLayout>
</template>
