<script setup lang="ts">
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import ContactForm from './components/ContactForm.vue'
import ContactHero from './components/ContactHero.vue'
import ContactInfo from './components/ContactInfo.vue'

defineOptions({
  name: 'QsdContactPage'
})
</script>

<template>
  <QsdLayout>
    <ContactHero />
    <section class="contact-section page-shell">
      <ContactForm />
      <ContactInfo />
    </section>
  </QsdLayout>
</template>
