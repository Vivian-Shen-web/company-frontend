<script setup lang="ts">
import { SearchOutlined } from '@ant-design/icons-vue'

import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdLocatorPage'
})

defineProps<{
  current: string
  heroImage: string
  mapImage: string
}>()

const qsdStore = useQsdStore()
</script>

<template>
  <section class="qsd-locator">
    <div class="qsd-locator__breadcrumb page-shell">
      <RouterLink to="/">Home</RouterLink>
      <span>＞ {{ current }}</span>
    </div>
    <img class="qsd-locator__hero" :src="asset(heroImage)" :alt="current" />
    <div class="qsd-locator__search">
      <a-input size="large" placeholder="Search">
        <template #suffix>
          <SearchOutlined />
        </template>
      </a-input>
    </div>
    <div class="qsd-locator__map-card">
      <img :src="asset(mapImage)" alt="QSD locator map" />
    </div>
    <section class="detail-bottom-cta">
      <div class="page-shell detail-bottom-cta__inner">
        <h2>Ready to electrify your fleet?</h2>
        <div>
          <button class="primary-pill" type="button" @click="qsdStore.openInquiry">
            Requst a Quote
          </button>
          <RouterLink class="ghost-pill ghost-pill--light" to="/dealer">Find a Dealer</RouterLink>
        </div>
      </div>
    </section>
  </section>
</template>
