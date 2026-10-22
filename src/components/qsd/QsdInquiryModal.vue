<script setup lang="ts">
import { message } from 'ant-design-vue'
import { storeToRefs } from 'pinia'

import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdInquiryModal'
})

const qsdStore = useQsdStore()
const { inquiryOpen } = storeToRefs(qsdStore)

const submitInquiry = () => {
  message.success('Thanks, QSD team will contact you soon.')
  qsdStore.closeInquiry()
}
</script>

<template>
  <a-modal v-model:open="inquiryOpen" :footer="null" width="520px" centered wrap-class-name="qsd-modal">
    <div class="inquiry-modal">
      <h2>Get in touch</h2>
      <p>Please share your contact details</p>
      <a-form layout="vertical">
        <a-form-item label="Full Name*"><a-input size="large" /></a-form-item>
        <a-form-item label="Mobile Number*"><a-input size="large" /></a-form-item>
        <a-form-item label="Email Id"><a-input size="large" /></a-form-item>
        <a-checkbox checked>Subscribe to WhatsApp.</a-checkbox>
        <p class="terms">
          I agree to receive a call back from QSD and associated agencies and organizations regarding
          my interest in QSD brands, as per the calling guidelines available also agree to website's
          <span> Terms of Use </span> and <span> Privacy Policy.</span>
        </p>
        <button class="primary-pill modal-submit" type="button" @click="submitInquiry">Submit</button>
      </a-form>
    </div>
  </a-modal>
</template>
