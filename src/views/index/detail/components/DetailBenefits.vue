<script setup lang="ts">
import {
  ColumnHeightOutlined,
  SafetyCertificateOutlined,
  SwapOutlined,
  ThunderboltOutlined
} from '@ant-design/icons-vue'
import { computed } from 'vue'

import { asset } from '@/services/qsd/qsdData'
import type { VehicleModel } from '@/services/qsd/qsdData'

defineOptions({
  name: 'DetailBenefits'
})

const props = defineProps<{
  vehicle: VehicleModel
}>()

const benefitSets = {
  'sun-13': {
    title: 'Benefits of buying a Sun 1+3',
    items: [
      {
        label: 'Battery Charging Socket',
        description: 'Convenient & Easy Charging',
        icon: ThunderboltOutlined,
        image: 'u461.png'
      },
      {
        label: 'Swappable Battery System',
        description: 'Quick Change, Longer Uptime',
        icon: SwapOutlined,
        image: 'u462.png'
      },
      {
        label: 'Shock Absorber',
        description: 'Smooth Ride Over Rough Terrain',
        icon: ColumnHeightOutlined,
        image: 'u463.png'
      },
      {
        label: 'Side Doors for Safety',
        description: 'Enhanced Passenger Protection',
        icon: SafetyCertificateOutlined,
        image: 'u464.png'
      }
    ]
  },
  'sun-cargo': {
    title: 'Benefits of buying a Sun Cargo',
    items: [
      {
        label: 'Battery Charging Socket',
        description: 'Convenient & Easy Charging',
        icon: ThunderboltOutlined,
        image: 'u104.png'
      },
      {
        label: 'Swappable Battery System',
        description: 'Quick Change, Longer Uptime',
        icon: SwapOutlined,
        image: 'u105.png'
      },
      {
        label: 'Shock Absorber',
        description: 'Smooth Ride Over Rough Terrain',
        icon: ColumnHeightOutlined,
        image: 'u106.png'
      },
      {
        label: 'High Ground Clearance',
        description: 'Smooth Ride on All Roads',
        icon: SafetyCertificateOutlined,
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
            <span class="benefit-card__icon"><component :is="item.icon" /></span>
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
