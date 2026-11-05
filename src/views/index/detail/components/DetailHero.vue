<script setup lang="ts">
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'
import type { VehicleModel } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'DetailHero'
})

defineProps<{
  vehicle: VehicleModel
}>()

const qsdStore = useQsdStore()
</script>

<template>
  <QsdBreadcrumb current="Vehicles" />
  <section class="detail-hero" :style="{ backgroundImage: `url(${asset('u13.png')})` }">
    <div class="page-shell detail-layout">
      <div class="detail-copy-panel">
        <p class="eyebrow">QSD ELECTRIC AUTOS -- INDIA</p>
        <h1>{{ vehicle.name }}</h1>
        <p class="detail-subtitle">{{ vehicle.description }} Compact, comfortable and efficient.</p>
        <p class="detail-copy">
          A modern electric passenger tricycle designed for daily urban mobility, offers smooth
          ride, reliable performance and low running cost.
        </p>
        <div class="detail-actions">
          <button class="quote-pill" type="button" @click="qsdStore.openInquiry">
            Request a Quote →
          </button>
          <button class="ghost-pill ghost-pill--light" type="button">
            Download Brochure
            <img class="pill-icon" :src="asset('u24.svg')" alt="" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
