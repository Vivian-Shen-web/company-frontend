<script setup lang="ts">
import { Modal, message } from 'ant-design-vue'
import type { FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import { reactive, ref } from 'vue'

import { submitQsdInquiry } from '@/services/qsd/qsd'

defineOptions({
  name: 'ContactForm'
})

const formRef = ref<FormInstance>()
const agreed = ref(false)
const submitting = ref(false)

const formState = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  interest: 'Becoming a dealer',
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
  firstName: [{ required: true, message: 'Please enter your first name' }],
  lastName: [{ required: true, message: 'Please enter your last name' }],
  email: [
    { required: true, message: 'Please enter your email' },
    { type: 'email', message: 'Please enter a valid email address' }
  ],
  phone: [
    { required: true, message: 'Please enter your phone number' },
    { validator: validatePhone }
  ]
}

const submitContact = async () => {
  try {
    await formRef.value?.validate()
  } catch {
    return
  }

  if (!agreed.value) {
    Modal.confirm({
      title: 'Agreement required',
      content: 'Please agree to be contacted by QSD about this enquiry.',
      okText: 'OK',
      cancelText: 'Cancel',
      onOk: () => {
        agreed.value = true
      }
    })
    return
  }

  submitting.value = true
  try {
    await submitQsdInquiry({
      full_name: `${formState.firstName} ${formState.lastName}`.trim(),
      mobile_number: formState.phone,
      email: formState.email,
      state: '',
      city: '',
      vehicle: '',
      message: formState.message,
      company: formState.company,
      interest_type: formState.interest
    })
  } catch {
    message.error('Something went wrong. Please try again.')
    return
  } finally {
    submitting.value = false
  }

  message.success('Thanks, QSD team will contact you soon.')
}
</script>

<template>
  <a-form ref="formRef" :model="formState" :rules="rules" layout="vertical" class="contact-form">
    <h2>Send us a message</h2>
    <div class="two-col">
      <a-form-item name="firstName" label="First name *">
        <a-input v-model:value="formState.firstName" size="large" placeholder="John" />
      </a-form-item>
      <a-form-item name="lastName" label="Last name *">
        <a-input v-model:value="formState.lastName" size="large" placeholder="Smith" />
      </a-form-item>
    </div>
    <a-form-item name="email" label="Email *">
      <a-input v-model:value="formState.email" size="large" placeholder="you@company.com" />
    </a-form-item>
    <a-form-item name="phone" label="Phone / WhatsApp *">
      <a-input v-model:value="formState.phone" size="large" placeholder="+86 138 0000 0000" />
    </a-form-item>
    <a-form-item name="company" label="Company / Brand">
      <a-input v-model:value="formState.company" size="large" placeholder="Your company name" />
    </a-form-item>
    <a-form-item name="interest" label="I am interested in">
      <a-select v-model:value="formState.interest" size="large">
        <a-select-option value="Becoming a dealer">Becoming a dealer</a-select-option>
        <a-select-option value="Fleet order">Fleet order</a-select-option>
        <a-select-option value="OEM partnership">OEM partnership</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item name="message" label="Message">
      <a-textarea
        v-model:value="formState.message"
        :rows="5"
        placeholder="Tell us about your requirement..."
      />
    </a-form-item>
    <a-checkbox v-model:checked="agreed">
      I agree to be contacted by QSD about this enquiry.
    </a-checkbox>
    <button
      class="primary-pill form-submit"
      type="button"
      :disabled="submitting"
      @click="submitContact"
    >
      {{ submitting ? 'Sending...' : 'Send Message →' }}
    </button>
    <p class="privacy">We respect your privacy – no spam, ever.</p>
  </a-form>
</template>
