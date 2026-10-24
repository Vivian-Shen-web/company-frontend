<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import CtaSection from './index/components/CtaSection.vue'
import HeroSection from './index/components/HeroSection.vue'
import ManufacturingSection from './index/components/ManufacturingSection.vue'
import StatsStrip from './index/components/StatsStrip.vue'
import TestimonialSection from './index/components/TestimonialSection.vue'
import VehicleShowcase from './index/components/VehicleShowcase.vue'

defineOptions({
  name: 'QsdHomePage'
})
</script>

<template>
  <QsdLayout>
    <HeroSection />
    <StatsStrip />
    <VehicleShowcase />
    <TestimonialSection />
    <ManufacturingSection />
    <CtaSection />
  </QsdLayout>
</template>
