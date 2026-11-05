<script setup lang="ts">
import { useQsdStore } from '@/stores/modules/qsd'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'CtaSection'
})

const qsdStore = useQsdStore()
const whatsappLink = 'https://wa.me/8615030611128'
</script>

<template>
  <section class="cta-section page-shell">
    <h2>Ready to electrify your fleet?</h2>
    <p>
      talk to team for partnership opportunities,dealer inquiries, custom solutions and fleet
      programs across India.
    </p>
    <div>
      <button class="primary-pill" type="button" @click="qsdStore.openInquiry">
        Get Free Quote →
      </button>
      <a class="whatsapp-pill" :href="whatsappLink" target="_blank" rel="noopener">
        <img class="whatsapp-pill__icon" :src="asset('u397.svg')" alt="" />
        Whats APP
      </a>
    </div>
  </section>
</template>
