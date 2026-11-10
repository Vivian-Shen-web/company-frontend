<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'
import type { VehicleModel } from '@/services/qsd/qsdData'

defineOptions({
  name: 'VehicleHighlights'
})

defineProps<{
  vehicle: VehicleModel
}>()

const qsdStore = useQsdStore()

const routeFacts = [
  {
    text: 'Driver + 3 passenger seating',
    icons: [
      { src: 'u493.svg', className: 'route-icon--seats' },
      { src: 'u492.svg', className: 'route-icon--driver' }
    ]
  },
  { text: '- ≤20° climbing ability', icons: [{ src: 'u489.svg', className: 'route-icon--climb' }] },
  { text: '220V, 60Hz charging', icons: [{ src: 'u490.svg', className: 'route-icon--charge' }] }
]
</script>

<template>
  <section class="detail-route-section">
    <div class="page-shell detail-route-grid">
      <div class="detail-route-copy">
        <h2>Built for everyday<br />passenger routes</h2>
        <p>
          The {{ vehicle.name }} is built to keep your passengers moving — safely, comfortably and
          affordably. Ideal for city routes, shuttle services and community transport.
        </p>
        <button class="detail-route-link" type="button" @click="qsdStore.openInquiry">
          Talk to fleet sales →
        </button>
      </div>
      <div class="detail-route-facts">
        <article v-for="fact in routeFacts" :key="fact.text">
          <span>
            <img
              v-for="icon in fact.icons"
              :key="icon.src"
              :class="icon.className"
              :src="asset(icon.src)"
              alt=""
            />
          </span>
          <p>{{ fact.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
