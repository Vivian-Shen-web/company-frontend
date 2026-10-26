<script setup lang="ts">
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'FactoryHero'
})

const qsdStore = useQsdStore()
</script>

<template>
  <QsdBreadcrumb current="ODM / R&amp;D" />
  <section class="factory-hero" :style="{ backgroundImage: `url(${asset('u56.png')})` }">
    <div class="page-shell factory-hero__inner">
      <div class="factory-hero__copy">
        <h1>DRIVE A BETTER<br />TOMORROW</h1>
        <p>
          QSD (QIANG SHENG) is an EV manufacturer and OEM partner with 15+ years of Indian-market
          experience. We design, engineer and manufacture high-performance electric autos and
          3-wheelers for brands, fleets and global markets.
        </p>
        <button class="sr-only" type="button" @click="qsdStore.openInquiry">Start a Project</button>
      </div>
    </div>
  </section>
</template>
