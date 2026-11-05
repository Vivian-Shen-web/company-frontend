<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import QsdBottomCta from '@/components/qsd/QsdBottomCta.vue'
import AboutHero from './components/AboutHero.vue'
import AboutIntro from './components/AboutIntro.vue'
import DrivingForces from './components/DrivingForces.vue'
import FactoryWorkshops from './components/FactoryWorkshops.vue'
import GlobalService from './components/GlobalService.vue'
import WhyQsd from './components/WhyQsd.vue'

defineOptions({
  name: 'QsdAboutPage'
})
</script>

<template>
  <QsdLayout>
    <AboutHero />
    <AboutIntro />
    <DrivingForces />
    <WhyQsd />
    <FactoryWorkshops />
    <GlobalService />
    <QsdBottomCta />
  </QsdLayout>
</template>
