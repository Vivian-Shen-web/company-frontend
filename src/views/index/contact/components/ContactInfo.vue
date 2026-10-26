<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'ContactInfo'
})

const contactCards = [
  {
    icon: 'u928.svg',
    title: 'First name',
    lines: ['QIANG SHENG (QSD)', 'Manufacturing & R&D headquarters']
  },
  {
    icon: 'u926.svg',
    title: 'Email',
    lines: ['info@qsd.com', 'OEM & export: sales@qsd.com']
  },
  {
    icon: 'u923.svg',
    title: 'WhatsApp',
    lines: ['+86 182 5401 5279', 'Mon–Sat, 9:00–18:00 (GMT+8)']
  }
]
</script>

<template>
  <aside class="contact-info">
    <article v-for="card in contactCards" :key="card.title" class="contact-info-card">
      <img :src="asset(card.icon)" alt="" />
      <h3>{{ card.title }}</h3>
      <p>
        <span v-for="line in card.lines" :key="line">{{ line }}</span>
      </p>
    </article>
    <RouterLink class="contact-dealer-link" to="/dealer">Find a Dealer in India →</RouterLink>
  </aside>
</template>
