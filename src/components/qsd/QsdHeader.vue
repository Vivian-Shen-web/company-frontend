<script setup lang="ts">
import {
  ArrowRightOutlined,
  DownloadOutlined,
  DownOutlined,
  PhoneOutlined
} from '@ant-design/icons-vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import { asset, siteContact } from '@/services/qsd/qsdData'
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

const vehicleMenuCategories = ['3W Passenger', '3W Cargo']

const activeVehicleMenu = ref('3W Passenger')

const vehicleMenuItems = computed(() => {
  if (activeVehicleMenu.value === '3W Cargo') {
    return [{ label: 'QSD-SUN Loader', image: 'sun-cargo.png', size: 'sun', id: 'sun-cargo' }]
  }
  return [{ label: 'QSD-SUN 1+3', image: 'u1370.png', size: 'sun', id: 'sun-13' }]
})

const goMenuVehicle = (id: string | null) => {
  if (!id) return
  goDetail(id)
}

const brochureCategories = [
  { name: '3W Passenger', models: ['SUN 1+3'] },
  { name: '3W Cargo', models: ['SUN CARGO 1.8 LOADER'] }
]

const brochureLanguages = [
  'English brochure',
  'हिन्दी ब्रोशर',
  'Español folleto',
  'Français brochure',
  'ಕನ್ನಡ ಬ್ರೋಷರ್',
  'മലയാളം ബ്രോഷർ'
]

const openBrochureCategory = ref('3W Passenger')
const openBrochureModel = ref('SUN 1+3')

const toggleBrochureCategory = (name: string) => {
  openBrochureCategory.value = openBrochureCategory.value === name ? '' : name
}
</script>

<template>
  <header>
    <div class="top-contact">
      <div class="page-shell top-contact__inner">
        <a-dropdown
          placement="bottomLeft"
          :trigger="['click']"
          overlay-class-name="qsd-brochure-dropdown"
        >
          <button class="brochure-select" type="button">
            Download Brochure
            <DownOutlined class="brochure-chevron" />
          </button>
          <template #overlay>
            <div class="brochure-menu">
              <div
                v-for="category in brochureCategories"
                :key="category.name"
                class="brochure-menu__group"
              >
                <button
                  class="brochure-menu__category"
                  type="button"
                  :class="{ 'is-open': openBrochureCategory === category.name }"
                  @click="toggleBrochureCategory(category.name)"
                >
                  {{ category.name }}
                  <span class="brochure-menu__sign">
                    {{ openBrochureCategory === category.name ? '−' : '+' }}
                  </span>
                </button>
                <div
                  v-if="openBrochureCategory === category.name && category.models.length"
                  class="brochure-menu__models"
                >
                  <template v-for="model in category.models" :key="model">
                    <button
                      class="brochure-menu__model"
                      type="button"
                      @click="openBrochureModel = model"
                    >
                      <DownloadOutlined />
                      {{ model }}
                    </button>
                    <div
                      v-if="model === 'SUN 1+3' && openBrochureModel === 'SUN 1+3'"
                      class="brochure-menu__langs"
                    >
                      <a
                        v-for="language in brochureLanguages"
                        :key="language"
                        href="#"
                        @click.prevent
                      >
                        {{ language }}
                        <DownloadOutlined />
                      </a>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </a-dropdown>
        <PhoneOutlined class="phone-icon" />
        <a class="phone-number" :href="siteContact.whatsapp" target="_blank" rel="noreferrer">{{
          siteContact.phone
        }}</a>
      </div>
    </div>

    <nav class="main-nav">
      <div class="page-shell main-nav__inner">
        <RouterLink class="logo-button" to="/">
          <img :src="asset('qsd-logo.png')" alt="QSD" />
        </RouterLink>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/about">About us</RouterLink>
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
                  v-for="category in vehicleMenuCategories"
                  :key="category"
                  type="button"
                  class="vehicle-menu__side-item"
                  :class="{ 'is-active': activeVehicleMenu === category }"
                  @click="activeVehicleMenu = category"
                >
                  <span>{{ category }}</span>
                  <img
                    :src="asset(activeVehicleMenu === category ? 'u1366.svg' : 'u1367.svg')"
                    alt=""
                  />
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
        <RouterLink class="nav-link" to="/factory">R&amp;D</RouterLink>
        <RouterLink class="nav-link" to="/blog">Blogs</RouterLink>
        <RouterLink class="nav-link" to="/shorts">Shorts</RouterLink>
        <RouterLink class="nav-link" to="/contact">Contact us</RouterLink>
        <button class="nav-link" type="button" @click="qsdStore.openDealer">Become a Dealer</button>
        <button class="enquire-button" type="button" @click="qsdStore.openInquiry">
          Enquire Now
          <ArrowRightOutlined />
        </button>
      </div>
    </nav>
  </header>
</template>
