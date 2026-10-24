<script setup lang="ts">
import { ArrowRightOutlined, DownloadOutlined, PhoneOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

import { asset, vehicles } from '@/services/qsd/qsdData'
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
        <a-dropdown placement="bottomLeft" overlay-class-name="qsd-dropdown">
          <button class="nav-link" type="button" @click="router.push('/vehicles')">
            Vehicles <span class="chevron">⌄</span>
          </button>
          <template #overlay>
            <div class="vehicle-menu">
              <div class="vehicle-menu__side">
                <strong>3W Passenger</strong>
                <strong>3W Cargo</strong>
                <strong>4W Passenger</strong>
                <strong>4W Cargo</strong>
              </div>
              <div class="vehicle-menu__grid">
                <button
                  v-for="vehicle in vehicles"
                  :key="vehicle.id"
                  type="button"
                  class="vehicle-menu__item"
                  @click="goDetail(vehicle.id)"
                >
                  <img :src="vehicle.image" :alt="vehicle.name" />
                  <span>{{ vehicle.name }}</span>
                </button>
              </div>
            </div>
          </template>
        </a-dropdown>
        <a-dropdown placement="bottomLeft" overlay-class-name="qsd-small-dropdown">
          <button class="nav-link" type="button" @click="router.push('/dealer')">
            Dealer &amp; Service <span class="chevron">⌄</span>
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
