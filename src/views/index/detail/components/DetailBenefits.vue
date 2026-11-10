<script setup lang="ts">
import { computed } from 'vue'

import { asset } from '@/services/qsd/qsdData'
import type { VehicleModel } from '@/services/qsd/qsdData'

defineOptions({
  name: 'DetailBenefits'
})

const props = defineProps<{
  vehicle: VehicleModel
}>()

interface BenefitGlyph {
  src: string
  width: number
  height: number
  left: number
  top: number
}

const glyphs = {
  socket: [{ src: 'benefit-i1.svg', width: 60, height: 55, left: 22, top: 22 }],
  battery: [{ src: 'benefit-i2.svg', width: 50, height: 32, left: 25, top: 34 }],
  shock: [{ src: 'benefit-i3.svg', width: 37, height: 56, left: 30, top: 20 }],
  doors: [
    { src: 'benefit-i4a.svg', width: 49, height: 58, left: 25, top: 24 },
    { src: 'benefit-i4b.svg', width: 27, height: 18, left: 36, top: 44 }
  ],
  motor: [
    { src: 'benefit-i5a.svg', width: 71, height: 53, left: 18, top: 23 },
    { src: 'benefit-i5b.svg', width: 34, height: 22, left: 28, top: 31 }
  ],
  clearance: [{ src: 'benefit-i6.svg', width: 51, height: 51, left: 24, top: 23 }]
} as const satisfies Record<string, BenefitGlyph[]>

const benefitSets = {
  'sun-13': {
    title: 'Benefits of buying a Sun 1+3',
    items: [
      {
        label: 'Battery Charging Socket',
        description: 'Convenient & Easy Charging',
        glyphs: glyphs.socket,
        image: 'benefit-1.png'
      },
      {
        label: 'Swappable Battery System',
        description: 'Quick Change, Longer Uptime',
        glyphs: glyphs.battery,
        image: 'benefit-2.png'
      },
      {
        label: 'Shock Absorber',
        description: 'Smooth Ride Over Rough Terrain',
        glyphs: glyphs.shock,
        image: 'benefit-3.png'
      },
      {
        label: 'Side Doors for Safety',
        description: 'Enhanced Passenger Protection',
        glyphs: glyphs.doors,
        image: 'benefit-4.png'
      },
      {
        label: 'Motor /Controller',
        description: 'Convenient & Easy Charging',
        glyphs: glyphs.motor,
        image: 'benefit-5.png'
      },
      {
        label: 'High Ground Clearance',
        description: 'Smooth Ride on All Roads',
        glyphs: glyphs.clearance,
        image: 'benefit-6.png'
      }
    ]
  },
  'sun-cargo': {
    title: 'Benefits of buying a Sun Cargo',
    items: [
      {
        label: 'Battery Charging Socket',
        description: 'Convenient & Easy Charging',
        glyphs: glyphs.socket,
        image: 'u104.png'
      },
      {
        label: 'Swappable Battery System',
        description: 'Quick Change, Longer Uptime',
        glyphs: glyphs.battery,
        image: 'u105.png'
      },
      {
        label: 'Shock Absorber',
        description: 'Smooth Ride Over Rough Terrain',
        glyphs: glyphs.shock,
        image: 'u106.png'
      },
      {
        label: 'High Ground Clearance',
        description: 'Smooth Ride on All Roads',
        glyphs: glyphs.clearance,
        image: 'u107.png'
      }
    ]
  }
}

const benefits = computed(
  () => benefitSets[props.vehicle.id as keyof typeof benefitSets] ?? benefitSets['sun-13']
)
</script>

<template>
  <section class="detail-benefits">
    <div class="page-shell">
      <h2 class="benefits-title">{{ benefits.title }}</h2>
      <div class="benefits-grid">
        <article v-for="item in benefits.items" :key="item.label" class="benefit-card">
          <img class="benefit-card__image" :src="asset(item.image)" :alt="item.label" />
          <div class="benefit-card__copy">
            <span class="benefit-card__icon">
              <img
                v-for="glyph in item.glyphs"
                :key="glyph.src"
                :src="asset(glyph.src)"
                :style="{
                  width: `${glyph.width}px`,
                  height: `${glyph.height}px`,
                  left: `${glyph.left}px`,
                  top: `${glyph.top}px`
                }"
                alt=""
              />
            </span>
            <div>
              <h3>{{ item.label }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
