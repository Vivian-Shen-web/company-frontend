<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'
import type { VehicleModel } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'DetailBanner'
})

defineProps<{
  vehicle: VehicleModel
}>()

const qsdStore = useQsdStore()
</script>

<template>
  <section class="detail-banner">
    <img class="detail-banner__bg" :src="asset('detail-banner.png')" alt="" />
    <div class="page-shell detail-banner__inner">
      <p class="detail-banner__eyebrow">QSD ELECTRIC AUTOS -- INDIA</p>
      <h1>{{ vehicle.name }}</h1>
      <p class="detail-banner__copy">Driver + 3 passengers.Compact, comfortable and efficient.</p>
      <p class="detail-banner__copy">
        A modern electric passenger tricycle designed for daily urban mobility, offers smooth ride,
        It a reliable performance and low running g cost.
      </p>
      <div class="detail-banner__actions">
        <button class="detail-banner__quote" type="button" @click="qsdStore.openInquiry">
          Request a Quote
          <img :src="asset('detail-btn-arrow.svg')" alt="" />
        </button>
        <a class="detail-banner__brochure" href="#" @click.prevent>
          Download Brochure
          <img :src="asset('detail-btn-download.svg')" alt="" />
        </a>
      </div>
    </div>
  </section>
</template>
