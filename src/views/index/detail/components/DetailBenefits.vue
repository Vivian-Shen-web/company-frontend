<script setup lang="ts">
import {
  ColumnHeightOutlined,
  ControlOutlined,
  DashboardOutlined,
  EyeOutlined,
  SafetyCertificateOutlined,
  StarOutlined
} from '@ant-design/icons-vue'
import { ref } from 'vue'

import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'DetailBenefits'
})

const benefits = [
  {
    label: 'Brake',
    icon: SafetyCertificateOutlined,
    image: asset('u77.png'),
    description:
      'This view shows the vehicle’s cabin braking system with foot service brake and hand parking brake. The compact hydraulic master cylinder and linkage provide reliable braking performance.'
  },
  {
    label: 'Handlebar',
    icon: ControlOutlined,
    image: asset('u81.png'),
    description:
      'This is the steering handle with integrated light control switches for convenient operation, keeping essential controls close to the driver.'
  },
  {
    label: 'Dashboard',
    icon: DashboardOutlined,
    image: asset('u82.png'),
    description:
      'This is the new energy vehicle dashboard, equipped with a digital display, D/R gear switches, ECO mode and function buttons for easy operation.'
  },
  {
    label: 'Mirror',
    icon: EyeOutlined,
    image: asset('u77.png'),
    description:
      'This sleek side rearview mirror is fitted with a built-in LED turn signal light. It provides clear rear vision and improves visibility to other road users for safer driving.'
  },
  {
    label: 'Suspension',
    icon: ColumnHeightOutlined,
    image: asset('u81.png'),
    description:
      'This wheel assembly features a thick tread tire, alloy rim and coil spring shock absorber. It delivers strong grip and comfortable riding on rough roads.'
  },
  {
    label: 'Attractive Looks',
    icon: StarOutlined,
    image: asset('u82.png'),
    description:
      'A 72 V electric platform, powered by a permanent magnet synchronous motor. The SUN 1+3 keeps the essential controls close to the driver.'
  }
]

const activeIndex = ref(0)
const activeBenefit = ref(benefits[0])

const selectBenefit = (index: number) => {
  activeIndex.value = index
  activeBenefit.value = benefits[index]
}
</script>

<template>
  <section class="detail-benefits">
    <div class="page-shell">
      <h2 class="detail-section-title">Benefits of buying a Sun 1+3</h2>
      <div class="benefits-layout">
        <ul class="benefits-nav">
          <li v-for="(benefit, index) in benefits" :key="benefit.label">
            <button
              type="button"
              class="benefits-nav__item"
              :class="{ 'is-active': activeIndex === index }"
              @click="selectBenefit(index)"
            >
              <span class="benefits-nav__icon"><component :is="benefit.icon" /></span>
              <span class="benefits-nav__label">{{ benefit.label }}</span>
            </button>
          </li>
        </ul>
        <div class="benefits-visual">
          <img
            class="benefits-visual__image"
            :src="activeBenefit.image"
            :alt="activeBenefit.label"
          />
          <div class="benefits-card">
            <h3>{{ activeBenefit.label }}</h3>
            <p>{{ activeBenefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
