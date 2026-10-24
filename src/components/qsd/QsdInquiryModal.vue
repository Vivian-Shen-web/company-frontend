<script setup lang="ts">
import { message } from 'ant-design-vue'
import { storeToRefs } from 'pinia'

import { vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdInquiryModal'
})

const qsdStore = useQsdStore()
const { inquiryOpen } = storeToRefs(qsdStore)
const states = ['Select State', 'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat']

const submitInquiry = () => {
  message.success('Thanks, QSD team will contact you soon.')
  qsdStore.closeInquiry()
}
</script>

<template>
  <a-modal
    v-model:open="inquiryOpen"
    :footer="null"
    width="920px"
    centered
    wrap-class-name="qsd-modal"
  >
    <div class="inquiry-modal">
      <h2>Get in touch</h2>
      <p>Please share your contact details</p>
      <a-form class="inquiry-form" layout="vertical">
        <div class="inquiry-grid">
          <a-form-item><a-input size="large" placeholder="Full Name*" /></a-form-item>
          <a-form-item><a-input size="large" placeholder="Mobile Number*" /></a-form-item>
          <a-form-item><a-input size="large" placeholder="Email Id" /></a-form-item>
          <a-form-item>
            <a-select size="large" placeholder="Select Vehicle*">
              <a-select-option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.name">
                {{ vehicle.name }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select size="large" placeholder="Select State">
              <a-select-option v-for="state in states" :key="state" :value="state">
                {{ state }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select size="large" placeholder="Select State">
              <a-select-option v-for="state in states" :key="state" :value="state">
                {{ state }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <p class="terms">
          <a-checkbox />
          <span>
            I agree to receive a call back from QSD and associated agencies and organizations
            regarding my interest in QSD brands, as per the calling guidelines available also agree
            to website's <a>Terms of Use</a> and <a>Privacy Policy.</a>
          </span>
        </p>
        <label class="whatsapp-check"><a-checkbox /> Subscribe to WhatsApp.</label>
        <button class="modal-submit" type="button" @click="submitInquiry">Submit</button>
      </a-form>
    </div>
  </a-modal>
</template>
