<script setup lang="ts">
import { Modal, message } from 'ant-design-vue'
import type { FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import { storeToRefs } from 'pinia'
import { computed, reactive, ref } from 'vue'

import { indiaStates } from '@/services/qsd/indiaLocations'
import { vehicles } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdInquiryModal'
})

const qsdStore = useQsdStore()
const { inquiryOpen } = storeToRefs(qsdStore)

const formRef = ref<FormInstance>()
const agreed = ref(false)
const formState = reactive({
  fullName: '',
  mobile: '',
  email: '',
  vehicle: undefined as string | undefined,
  state: undefined as string | undefined,
  city: undefined as string | undefined
})

const cityOptions = computed(
  () => indiaStates.find((item) => item.name === formState.state)?.cities ?? []
)

const handleStateChange = () => {
  formState.city = undefined
}

const validatePhone = (_rule: unknown, value: string) => {
  if (!value) return Promise.resolve()
  const digits = value.replace(/[\s()\-./]/g, '')
  if (!/^(\+|00)?\d{6,15}$/.test(digits)) {
    return Promise.reject(new Error('Please enter a valid mobile number'))
  }
  return Promise.resolve()
}

const rules: Record<string, Rule[]> = {
  fullName: [{ required: true, message: 'Please enter your full name' }],
  mobile: [
    { required: true, message: 'Please enter your mobile number' },
    { validator: validatePhone }
  ],
  email: [{ type: 'email', message: 'Please enter a valid email address' }],
  vehicle: [{ required: true, message: 'Please select a vehicle' }]
}

const submitInquiry = async () => {
  try {
    await formRef.value?.validate()
  } catch {
    // 校验未通过时由表单展示错误提示
    return
  }

  if (!agreed.value) {
    Modal.confirm({
      title: 'Agreement required',
      content:
        'Please agree to receive a call back from QSD and associated agencies and organizations regarding your interest in QSD brands.',
      okText: 'OK',
      cancelText: 'Cancel',
      onOk: () => {
        agreed.value = true
      }
    })
    return
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
            <a-input v-model:value="formState.mobile" size="large" placeholder="Mobile Number" />
          </a-form-item>
          <a-form-item name="email">
            <a-input v-model:value="formState.email" size="large" placeholder="Email Id" />
          </a-form-item>
          <a-form-item name="vehicle" class="inquiry-field inquiry-field--required">
            <a-select v-model:value="formState.vehicle" size="large" placeholder="Select Vehicle">
              <a-select-option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.name">
                {{ vehicle.name }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select
              v-model:value="formState.state"
              size="large"
              placeholder="Select State"
              show-search
              option-filter-prop="label"
              @change="handleStateChange"
            >
              <a-select-option v-for="state in indiaStates" :key="state.name" :value="state.name">
                {{ state.name }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-select
              v-model:value="formState.city"
              size="large"
              placeholder="Select City"
              show-search
              option-filter-prop="label"
              :disabled="!formState.state"
            >
              <a-select-option v-for="city in cityOptions" :key="city" :value="city">
                {{ city }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <p class="terms">
          <a-checkbox v-model:checked="agreed" />
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
