<script setup lang="ts">
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'CtaSection'
})

const qsdStore = useQsdStore()
</script>

<template>
  <section class="cta-section page-shell">
    <h2>Ready to electrify your fleet?</h2>
    <p>talk to team for partnership opportunities,dealer inquiries, custom solutions and fleet programs across India.</p>
    <div>
      <button class="primary-pill" type="button" @click="qsdStore.openInquiry">Requst a Quote →</button>
      <RouterLink class="ghost-pill" to="/dealer">Find a Dealer</RouterLink>
    </div>
  </section>
</template>
