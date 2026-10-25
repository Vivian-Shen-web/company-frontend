<script setup lang="ts">
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdLocatorPage'
})

defineProps<{
  current: string
  heroImage: string
  mapImage: string
  narrowMap?: boolean
}>()

const qsdStore = useQsdStore()
</script>

<template>
  <section class="qsd-locator">
    <QsdBreadcrumb :current="current" />
    <img class="qsd-locator__hero" :src="asset(heroImage)" :alt="current" />
    <div class="qsd-locator__search">
      <a-input placeholder="Search">
        <template #suffix>
          <img class="qsd-locator__search-icon" :src="asset('u1021.svg')" alt="" />
        </template>
      </a-input>
    </div>
    <div class="qsd-locator__map" :class="{ 'qsd-locator__map--narrow': narrowMap }">
      <img :src="asset(mapImage)" alt="QSD locator map" />
    </div>
    <section class="qsd-locator__cta">
      <div class="page-shell qsd-locator__cta-inner">
        <h2>Ready to electrify your fleet?</h2>
        <div class="qsd-locator__cta-actions">
          <button class="qsd-locator__quote" type="button" @click="qsdStore.openInquiry">
            Request a Quote
          </button>
          <RouterLink class="qsd-locator__dealer" to="/dealer">Find a Dealer</RouterLink>
        </div>
      </div>
    </section>
  </section>
</template>
