<script setup lang="ts">
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'ContactHero'
})
</script>

<template>
  <QsdBreadcrumb current="Contact" />
  <section class="contact-hero" :style="{ backgroundImage: `url(${asset('u880.png')})` }">
    <div class="page-shell">
      <h1>
        <span>Let’s talk about your</span><br />
        <strong>next EV project.</strong>
      </h1>
      <p>
        Dealer inquiries, fleet orders, OEM partnerships and custom development – our team responds
        within one business day.
      </p>
    </div>
  </section>
</template>
