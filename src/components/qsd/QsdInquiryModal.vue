<script setup lang="ts">
import { message } from 'ant-design-vue'
import type { FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

import { submitQsdInquiry } from '@/services/qsd/qsd'
import { vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdInquiryModal'
})

const qsdStore = useQsdStore()
const { inquiryOpen } = storeToRefs(qsdStore)

const formRef = ref<FormInstance>()
const submitting = ref(false)
const formState = reactive({
  fullName: '',
  mobile: '',
  email: '',
  vehicle: undefined as string | undefined,
  message: ''
})

const validatePhone = (_rule: unknown, value: string) => {
  if (!value) return Promise.resolve()
  const digits = value.replace(/[\s()\-./]/g, '')
  if (!/^(\+|00)?\d{6,15}$/.test(digits)) {
    return Promise.reject(new Error('Please enter a valid phone number'))
  }
  return Promise.resolve()
}

const rules: Record<string, Rule[]> = {
  fullName: [{ required: true, message: 'Please enter your full name' }],
  mobile: [
    { required: true, message: 'Please enter your phone number' },
    { validator: validatePhone }
  ],
  email: [{ type: 'email', message: 'Please enter a valid email address' }],
  vehicle: [{ required: true, message: 'Please select a vehicle' }]
}

const submitInquiry = async () => {
  try {
    await formRef.value?.validate()
  } catch {
    return
  }

  submitting.value = true
  try {
    await submitQsdInquiry({
      full_name: formState.fullName,
      mobile_number: formState.mobile,
      email: formState.email,
      state: '',
      city: '',
      vehicle: formState.vehicle ?? '',
      message: formState.message,
      company: '',
      interest_type: 'inquiry'
    })
  } catch {
    message.error('Something went wrong. Please try again.')
    return
  } finally {
    submitting.value = false
  }

  message.success('Thanks, QSD team will contact you soon.')
  qsdStore.closeInquiry()
}
</script>

<template>
  <a-modal
    v-model:open="inquiryOpen"
    :footer="null"
    width="750px"
    centered
    wrap-class-name="qsd-modal"
  >
    <div class="inquiry-modal">
      <h2>Get in touch</h2>
      <p>Please share your contact details</p>
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        class="inquiry-form"
        layout="vertical"
      >
        <div class="inquiry-grid">
          <a-form-item name="fullName" class="inquiry-field inquiry-field--required">
            <a-input v-model:value="formState.fullName" size="large" placeholder="Full Name" />
          </a-form-item>
          <a-form-item name="mobile" class="inquiry-field inquiry-field--required">
            <a-input v-model:value="formState.mobile" size="large" placeholder="Phone /Whats App" />
          </a-form-item>
          <a-form-item name="email" class="inquiry-field inquiry-field--required">
            <a-input v-model:value="formState.email" size="large" placeholder="Email Id" />
          </a-form-item>
          <a-form-item name="vehicle" class="inquiry-field inquiry-field--required">
            <a-select v-model:value="formState.vehicle" size="large" placeholder="Select Vehicle">
              <a-select-option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.name">
                {{ vehicle.name }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <a-form-item name="message" class="inquiry-field">
          <a-textarea
            v-model:value="formState.message"
            :rows="4"
            placeholder="Tell us about your requirement..."
          />
        </a-form-item>
        <button class="modal-submit" type="button" :disabled="submitting" @click="submitInquiry">
          {{ submitting ? 'Submitting...' : 'Submit' }}
        </button>
      </a-form>
    </div>
  </a-modal>
</template>
