<script setup lang="ts">
import { asset, siteContact } from '@/services/qsd/qsdData'

defineOptions({
  name: 'ContactInfo'
})

const whatsappLabel = '+86 15030611128'
</script>

<template>
  <aside class="contact-info">
    <a class="contact-info-card" :href="siteContact.maps" target="_blank" rel="noreferrer">
      <span class="contact-info-card__icon contact-info-card__icon--pin">
        <img :src="asset('u928.svg')" alt="" />
      </span>
      <h3>Factory</h3>
      <p>
        <span>{{ siteContact.factoryAddress }}</span>
      </p>
    </a>
    <a class="contact-info-card" :href="`mailto:${siteContact.email}`">
      <span class="contact-info-card__icon contact-info-card__icon--mail">
        <img :src="asset('u926.svg')" alt="" />
        <img :src="asset('u927.svg')" alt="" />
      </span>
      <h3>Email</h3>
      <p>
        <span>{{ siteContact.email }}</span>
      </p>
    </a>
    <a class="contact-info-card" :href="siteContact.whatsapp" target="_blank" rel="noreferrer">
      <span class="contact-info-card__icon contact-info-card__icon--chat">
        <img :src="asset('u923.svg')" alt="" />
        <img :src="asset('u924.svg')" alt="" />
      </span>
      <h3>WhatsApp</h3>
      <p>
        <span>{{ whatsappLabel }}</span>
      </p>
    </a>
    <RouterLink class="contact-dealer-link" to="/dealer">Find a Dealer in India →</RouterLink>
  </aside>
</template>
