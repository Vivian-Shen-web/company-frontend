<script setup lang="ts">
import QsdFloatActions from './QsdFloatActions.vue'
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
    <div class="qsd-scroll">
      <main>
        <slot />
      </main>
      <QsdFooter />
    </div>
    <QsdInquiryModal />
    <QsdFloatActions />
  </div>
</template>
