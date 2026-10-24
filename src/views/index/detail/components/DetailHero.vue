<script setup lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue'

import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'
import type { VehicleModel } from '@/services/qsd/qsdData'

defineOptions({
  name: 'DetailHero'
})

defineProps<{
  vehicle: VehicleModel
}>()

const qsdStore = useQsdStore()
</script>

<template>
  <div class="detail-breadcrumb page-shell">
    <RouterLink to="/">Home</RouterLink>
    <span>＞ Vehicles</span>
  </div>
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
          <button class="primary-pill" type="button" @click="qsdStore.openInquiry">
            Request a Quote →
          </button>
          <button class="ghost-pill ghost-pill--light" type="button">
            Download Brochure <DownloadOutlined />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
