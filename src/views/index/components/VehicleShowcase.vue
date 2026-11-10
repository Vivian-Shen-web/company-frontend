<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'

import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'VehicleShowcase'
})

const qsdStore = useQsdStore()

interface HighlightTile {
  label: string
  value: string
  icon: string
  width: number
  height: number
  overlay?: { icon: string; width: number; height: number; left: number; top: number }
}

interface ShowcaseCategory {
  key: string
  label: string
  icon: string
  vehicleId: string
  images: string[]
  tiles: HighlightTile[]
}

const showcaseCategories: ShowcaseCategory[] = [
  {
    key: '3W Passenger',
    label: '3W Passenger',
    icon: 'cat-passenger.svg',
    vehicleId: 'sun-13',
    images: ['u61.png', 'u62.png', 'u63.png', 'u64.png', 'u65.png'],
    tiles: [
      {
        label: 'Motor',
        value: '72V4Kw',
        icon: 'hl-motor.svg',
        width: 51,
        height: 39,
        overlay: { icon: 'hl-motor-2.svg', width: 26, height: 15, left: 7, top: 6 }
      },
      { label: 'Range', value: '80-100kms', icon: 'hl-range.svg', width: 44, height: 29 },
      { label: 'Battery', value: '72V120Ah', icon: 'hl-battery.svg', width: 54, height: 54 },
      {
        label: 'Top Speed',
        value: '50-55km/h',
        icon: 'hl-speed.svg',
        width: 50,
        height: 41,
        overlay: { icon: 'hl-speed-2.svg', width: 13, height: 12, left: 21, top: 18 }
      }
    ]
  },
  {
    key: '3W Cargo',
    label: '3W Cargo',
    icon: 'cat-cargo.svg',
    vehicleId: 'sun-cargo',
    images: ['u104.png'],
    tiles: [
      {
        label: 'Motor',
        value: '60V4Kw',
        icon: 'hl-motor.svg',
        width: 51,
        height: 39,
        overlay: { icon: 'hl-motor-2.svg', width: 26, height: 15, left: 7, top: 6 }
      },
      { label: 'Range', value: '100+kms', icon: 'hl-range.svg', width: 44, height: 29 },
      { label: 'Battery', value: '60V 100Ah', icon: 'hl-battery.svg', width: 54, height: 54 },
      {
        label: 'Top Speed',
        value: '≤50km/h',
        icon: 'hl-speed.svg',
        width: 50,
        height: 41,
        overlay: { icon: 'hl-speed-2.svg', width: 13, height: 12, left: 21, top: 18 }
      }
    ]
  }
]

const activeKey = ref('3W Passenger')
const activeImage = ref(0)

const activeCategory = computed(
  () =>
    showcaseCategories.find((category) => category.key === activeKey.value) ?? showcaseCategories[0]
)
const currentImage = computed(
  () => activeCategory.value.images[activeImage.value % activeCategory.value.images.length]
)

const selectCategory = (key: string) => {
  activeKey.value = key
  activeImage.value = 0
}

const stepImage = (direction: number) => {
  const total = activeCategory.value.images.length
  activeImage.value = (activeImage.value + direction + total) % total
}

let autoTimer = window.setInterval(() => stepImage(1), 4000)

const stopAuto = () => {
  window.clearInterval(autoTimer)
}

onBeforeUnmount(stopAuto)
</script>

<template>
  <section id="vehicles" class="showcase-section page-shell">
    <h2 class="showcase-title">High-value electric vehicles, exclusive discounts on your order.</h2>

    <div class="showcase-categories">
      <button
        v-for="category in showcaseCategories"
        :key="category.key"
        type="button"
        class="showcase-category"
        :class="{ 'is-active': activeKey === category.key }"
        @click="selectCategory(category.key)"
      >
        <img :src="asset(category.icon)" :alt="category.label" />
        <span>{{ category.label }}</span>
      </button>
    </div>

    <div class="showcase-main" @mouseenter="stopAuto">
      <button
        class="showcase-arrow showcase-arrow--prev"
        type="button"
        aria-label="Previous"
        @click="stepImage(-1)"
      />
      <div class="showcase-visual">
        <img :src="asset(currentImage)" :alt="activeCategory.label" />
      </div>
      <div class="showcase-panel">
        <h3>KEY HIGHLIGHTS</h3>
        <div class="showcase-tiles">
          <article v-for="tile in activeCategory.tiles" :key="tile.label" class="showcase-tile">
            <span class="showcase-tile__icon">
              <img
                :src="asset(tile.icon)"
                :style="{ width: `${tile.width}px`, height: `${tile.height}px` }"
                alt=""
              />
              <img
                v-if="tile.overlay"
                class="showcase-tile__overlay"
                :src="asset(tile.overlay.icon)"
                :style="{
                  width: `${tile.overlay.width}px`,
                  height: `${tile.overlay.height}px`,
                  left: `${tile.overlay.left}px`,
                  top: `${tile.overlay.top}px`
                }"
                alt=""
              />
            </span>
            <span class="showcase-tile__copy">
              <small>{{ tile.label }}</small>
              <strong>{{ tile.value }}</strong>
            </span>
          </article>
        </div>
        <RouterLink
          class="showcase-more"
          :to="`/detail/${activeCategory.vehicleId}`"
          @click="qsdStore.setActiveVehicle(activeCategory.vehicleId)"
        >
          Kown More
        </RouterLink>
      </div>
      <button
        class="showcase-arrow showcase-arrow--next"
        type="button"
        aria-label="Next"
        @click="stepImage(1)"
      />
    </div>
  </section>
</template>
