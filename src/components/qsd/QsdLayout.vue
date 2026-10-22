<script setup lang="ts">
import QsdFooter from './QsdFooter.vue'
import QsdHeader from './QsdHeader.vue'
import QsdInquiryModal from './QsdInquiryModal.vue'

defineOptions({
  name: 'QsdLayout'
})
</script>

<template>
  <div class="qsd-site">
    <QsdHeader />
    <main>
      <slot />
    </main>
    <QsdFooter />
    <QsdInquiryModal />
  </div>
</template>
