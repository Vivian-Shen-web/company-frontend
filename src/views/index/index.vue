<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import CtaSection from './components/CtaSection.vue'
import HeroSection from './components/HeroSection.vue'
import ManufacturingSection from './components/ManufacturingSection.vue'
import StatsStrip from './components/StatsStrip.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import VehicleShowcase from './components/VehicleShowcase.vue'

defineOptions({
  name: 'QsdHomePage'
})
</script>

<template>
  <QsdLayout>
    <HeroSection />
    <StatsStrip />
    <VehicleShowcase />
    <ManufacturingSection />
    <TestimonialSection />
    <CtaSection />
  </QsdLayout>
</template>
