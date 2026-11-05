<script setup lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue'

import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'
import type { VehicleModel } from '@/services/qsd/qsdData'

defineOptions({
  name: 'DetailHero'
})

defineProps<{
  vehicle: VehicleModel
}>()

const whatsappLink = 'https://wa.me/8615030611128'
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
          <button class="brochure-pill" type="button">
            Download Brochure <DownloadOutlined />
          </button>
          <a class="whatsapp-pill" :href="whatsappLink" target="_blank" rel="noopener">
            <span class="whatsapp-pill__icon" />
            Whats APP
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
