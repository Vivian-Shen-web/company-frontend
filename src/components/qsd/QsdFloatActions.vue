<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdFloatActions'
})

const qsdStore = useQsdStore()
const whatsappLink = 'https://wa.me/8615030611128'
</script>

<template>
  <div class="float-actions">
    <button
      class="float-actions__btn float-actions__btn--chat"
      type="button"
      aria-label="Chat with QSD"
      @click="qsdStore.openInquiry"
    >
      <img class="float-actions__icon" :src="asset('float-chat.svg')" alt="" />
    </button>
    <a
      class="float-actions__btn float-actions__btn--whatsapp"
      :href="whatsappLink"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp QSD"
    >
      <img class="float-actions__icon" :src="asset('u2084.svg')" alt="" />
    </a>
  </div>
</template>
