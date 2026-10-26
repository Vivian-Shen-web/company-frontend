<script setup lang="ts">
import {
  ArrowRightOutlined,
  DownloadOutlined,
  DownOutlined,
  PhoneOutlined
} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdHeader'
})

const router = useRouter()
const qsdStore = useQsdStore()

const goDetail = (id: string) => {
  qsdStore.setActiveVehicle(id)
  router.push(`/detail/${id}`)
}

const vehicleMenuCategories = ['3W Passenger', '3W Cargo', '4W Passenger', '4W Cargo']
const vehicleMenuItems = [
  { label: 'SUN 1+3', image: 'u1370.png', size: 'sun', id: 'sun-13' },
  { label: 'TESLATESLA', image: 'u81.png', size: 'tesla', id: 'tesla-d46' },
  { label: 'JOY SPORT 1+8', image: 'u82.png', size: 'joy', id: 'joy-18' },
  { label: 'MASTER', image: 'u1379.png', size: 'master', id: null },
  { label: 'SUN 1+3', image: 'u1370.png', size: 'sun', id: 'sun-13' },
  { label: 'TESLATESLA', image: 'u81.png', size: 'tesla', id: 'tesla-d46' },
  { label: 'JOY SPORT 1+8', image: 'u82.png', size: 'joy', id: 'joy-18' },
  { label: 'MASTER', image: 'u1379.png', size: 'master', id: null }
]

const goMenuVehicle = (id: string | null) => {
  if (!id) return
  goDetail(id)
}
</script>

<template>
  <header>
    <div class="top-contact">
      <div class="page-shell top-contact__inner">
        <button class="brochure-select" type="button">
          Download Brochure
          <DownloadOutlined />
        </button>
        <PhoneOutlined class="phone-icon" />
        <span class="phone-number">18600875245</span>
      </div>
    </div>

    <nav class="main-nav">
      <div class="page-shell main-nav__inner">
        <RouterLink class="logo-button" to="/">
          <img :src="asset('u1342.png')" alt="QSD" />
        </RouterLink>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <a-dropdown
          placement="bottomLeft"
          :trigger="['hover', 'click']"
          overlay-class-name="qsd-dropdown"
        >
          <button class="nav-link" type="button">Vehicles <DownOutlined class="chevron" /></button>
          <template #overlay>
            <div class="vehicle-menu">
              <div class="vehicle-menu__side">
                <button
                  v-for="(category, index) in vehicleMenuCategories"
                  :key="category"
                  type="button"
                  class="vehicle-menu__side-item"
                  :class="{ 'is-active': index === 0 }"
                >
                  <span>{{ category }}</span>
                  <img :src="asset(index === 0 ? 'u1366.svg' : 'u1367.svg')" alt="" />
                </button>
              </div>
              <div class="vehicle-menu__grid">
                <button
                  v-for="(item, index) in vehicleMenuItems"
                  :key="`${item.label}-${index}`"
                  type="button"
                  class="vehicle-menu__item"
                  :class="`vehicle-menu__item--${item.size}`"
                  @click="goMenuVehicle(item.id)"
                >
                  <img :src="asset(item.image)" :alt="item.label" />
                  <span>{{ item.label }}</span>
                </button>
              </div>
            </div>
          </template>
        </a-dropdown>
        <a-dropdown placement="bottomLeft" overlay-class-name="qsd-small-dropdown">
          <button class="nav-link" type="button" @click="router.push('/dealer')">
            Dealer &amp; Service <DownOutlined class="chevron" />
          </button>
          <template #overlay>
            <div class="small-menu">
              <RouterLink to="/dealer">Dealer Locatar</RouterLink>
              <RouterLink to="/service">Service Locator</RouterLink>
            </div>
          </template>
        </a-dropdown>
        <button class="nav-link" type="button" @click="qsdStore.openInquiry">
          Become a Dealer
        </button>
        <RouterLink class="nav-link" to="/factory">ODM / R&amp;D</RouterLink>
        <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        <button class="enquire-button" type="button" @click="qsdStore.openInquiry">
          Enquie Now
          <ArrowRightOutlined />
        </button>
      </div>
    </nav>
  </header>
</template>
