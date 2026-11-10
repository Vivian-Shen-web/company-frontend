<script setup lang="ts">
import { computed } from 'vue'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'
import type { VehicleModel } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

import 'swiper/css'
import 'swiper/css/navigation'

defineOptions({
  name: 'DetailHero'
})

const props = defineProps<{
  vehicle: VehicleModel
}>()

const qsdStore = useQsdStore()

const angleImages: Record<string, string[]> = {
  'sun-13': ['u461.png', 'u462.png', 'u463.png', 'u464.png', 'u465.png'],
  'sun-cargo': ['u104.png']
}

const images = computed(() => angleImages[props.vehicle.id] ?? [props.vehicle.image])

const swiperModules = [Autoplay, Navigation]

const batteryValue = computed(() => {
  const raw = props.vehicle.specs.Battery ?? ''
  return raw.match(/(\d+V\s?\d+Ah)/i)?.[1] ?? raw
})

interface HighlightOverlay {
  icon: string
  width: number
  height: number
  left: number
  top: number
}

interface Highlight {
  label: string
  value: string
  icon: string
  width: number
  height: number
  overlay?: HighlightOverlay
}

const highlights = computed<Highlight[]>(() => [
  {
    label: 'Motor',
    value: props.vehicle.specs.Motor ?? '72V4000w',
    icon: 'hl-motor.svg',
    width: 51,
    height: 39,
    overlay: { icon: 'hl-motor-2.svg', width: 26, height: 15, left: 7, top: 6 }
  },
  {
    label: 'Range',
    value: props.vehicle.range,
    icon: 'hl-range.svg',
    width: 44,
    height: 29
  },
  {
    label: 'Battery',
    value: batteryValue.value,
    icon: 'hl-battery.svg',
    width: 54,
    height: 54
  },
  {
    label: 'Top Speed',
    value: props.vehicle.speed,
    icon: 'hl-speed.svg',
    width: 50,
    height: 41,
    overlay: { icon: 'hl-speed-2.svg', width: 13, height: 12, left: 21, top: 18 }
  }
])

const overlaySrc = (item: Highlight) => (item.overlay ? asset(item.overlay.icon) : '')

const overlayStyle = (item: Highlight) => ({
  width: `${item.overlay?.width ?? 0}px`,
  height: `${item.overlay?.height ?? 0}px`,
  left: `${item.overlay?.left ?? 0}px`,
  top: `${item.overlay?.top ?? 0}px`
})

const enquire = () => qsdStore.openInquiry()
</script>

<template>
  <QsdBreadcrumb current="Vehicles" />
  <section class="detail-hero">
    <div class="page-shell detail-hero__grid">
      <button class="detail-arrow detail-arrow--prev" type="button" aria-label="Previous" />
      <Swiper
        class="detail-stage"
        :modules="swiperModules"
        :loop="images.length > 1"
        :speed="600"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :navigation="{ prevEl: '.detail-arrow--prev', nextEl: '.detail-arrow--next' }"
      >
        <SwiperSlide v-for="image in images" :key="image">
          <img :src="asset(image)" :alt="vehicle.name" />
        </SwiperSlide>
      </Swiper>
      <div class="detail-panel">
        <h2>KEY HIGHLIGHTS</h2>
        <div class="detail-panel__tiles">
          <article v-for="item in highlights" :key="item.label" class="detail-tile">
            <span class="detail-tile__icon">
              <img
                :src="asset(item.icon)"
                :style="{ width: `${item.width}px`, height: `${item.height}px` }"
                alt=""
              />
              <img
                v-if="item.overlay"
                class="detail-tile__overlay"
                :src="overlaySrc(item)"
                :style="overlayStyle(item)"
                alt=""
              />
            </span>
            <span class="detail-tile__copy">
              <small>{{ item.label }}</small>
              <strong>{{ item.value }}</strong>
            </span>
          </article>
        </div>
        <button class="detail-enquire" type="button" @click="enquire">Enquire Now</button>
      </div>
      <button class="detail-arrow detail-arrow--next" type="button" aria-label="Next" />
    </div>
  </section>
</template>
