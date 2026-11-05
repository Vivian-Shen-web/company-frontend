<script setup lang="ts">
import { useQsdStore } from '@/stores/modules/qsd'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'QsdBottomCta'
})

withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'Ready to electrify your fleet?'
  }
)

const qsdStore = useQsdStore()
const whatsappLink = 'https://wa.me/8615030611128'
</script>

<template>
  <section class="detail-bottom-cta">
    <div class="page-shell detail-bottom-cta__inner">
      <h2>{{ title }}</h2>
      <div>
        <button class="quote-pill" type="button" @click="qsdStore.openInquiry">
          Get Free Quote →
        </button>
        <a class="whatsapp-pill" :href="whatsappLink" target="_blank" rel="noopener">
          <img class="whatsapp-pill__icon" :src="asset('cta-phone.svg')" alt="" />
          Whats APP
        </a>
      </div>
    </div>
  </section>
</template>
