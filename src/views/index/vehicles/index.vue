<script setup lang="ts">
import QsdSubHero from '@/components/qsd/QsdSubHero.vue'
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import VehicleCatalog from './components/VehicleCatalog.vue'

defineOptions({
  name: 'QsdVehiclesPage'
})
</script>

<template>
  <QsdLayout>
    <QsdSubHero title="THE LINEUP" subtitle="Compare our electric autos" current="Vehicels" />
    <VehicleCatalog />
  </QsdLayout>
</template>
