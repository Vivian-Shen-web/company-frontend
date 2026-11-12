<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'ShortsCta'
})

const qsdStore = useQsdStore()
const whatsappLink =
  'https://api.whatsapp.com/send/?phone=8615030611128&text&type=phone_number&app_absent=0'
</script>

<template>
  <section class="shorts-cta">
    <div class="page-shell">
      <div class="shorts-cta__card">
        <img class="shorts-cta__bg" :src="asset('shorts-cta-bg.png')" alt="" />
        <div class="shorts-cta__copy">
          <h2>Want to see more about QSD?</h2>
          <p>Follow our Shorts for product highlights, factory updates and more.</p>
        </div>
        <div class="shorts-cta__actions">
          <button
            class="shorts-cta__btn shorts-cta__btn--quote"
            type="button"
            @click="qsdStore.openInquiry"
          >
            Get Free Quote →
          </button>
          <a
            class="shorts-cta__btn shorts-cta__btn--whatsapp"
            :href="whatsappLink"
            target="_blank"
            rel="noopener"
          >
            <img class="shorts-cta__icon" :src="asset('cta-phone.svg')" alt="" />Whats APP
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
