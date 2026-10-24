<script setup lang="ts">
import { CheckCircleFilled } from '@ant-design/icons-vue'

import QsdLayout from '@/components/qsd/QsdLayout.vue'
import { useQsdStore } from '@/stores/modules/qsd'
import ContactForm from './components/ContactForm.vue'
import ContactHero from './components/ContactHero.vue'
import ContactInfo from './components/ContactInfo.vue'

defineOptions({
  name: 'QsdContactPage'
})

const qsdStore = useQsdStore()

const nextSteps = [
  {
    number: '01',
    title: 'Share your requirement',
    copy: 'Tell us the model, quantity and market.'
  },
  {
    number: '02',
    title: 'Get expert guidance',
    copy: 'Our team confirms specs, pricing and timelines.'
  },
  {
    number: '03',
    title: 'Receive your proposal',
    copy: 'Quotation, lead time and support plan.'
  }
]

const oemPoints = [
  'New model development',
  'R&D collaboration',
  'Dedicated OEM support',
  'Volume production'
]
</script>

<template>
  <QsdLayout>
    <ContactHero />
    <section class="contact-section page-shell">
      <ContactForm />
      <ContactInfo />
    </section>
    <section class="contact-next page-shell">
      <h2>WHAT HAPPENS NEXT</h2>
      <div class="contact-next__grid">
        <article v-for="step in nextSteps" :key="step.number">
          <span>{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.copy }}</p>
        </article>
      </div>
    </section>
    <section class="contact-oem page-shell">
      <div class="contact-oem__copy">
        <h2>FOR OEMs &amp; BRANDS</h2>
        <p>
          Whether you are an established EV brand or a mobility start-up, we are interested in
          long-term collaboration and exclusiveproduct development.
        </p>
        <button type="button" @click="qsdStore.openInquiry">Start a Project →</button>
      </div>
      <div class="contact-oem__points">
        <span v-for="point in oemPoints" :key="point">
          <CheckCircleFilled />
          {{ point }}
        </span>
      </div>
    </section>
    <section class="detail-bottom-cta">
      <div class="page-shell detail-bottom-cta__inner">
        <h2>Ready to electrify your fleet?</h2>
        <div>
          <button class="primary-pill" type="button" @click="qsdStore.openInquiry">
            Requst a Quote
          </button>
          <RouterLink class="ghost-pill ghost-pill--light" to="/dealer">Find a Dealer</RouterLink>
        </div>
      </div>
    </section>
  </QsdLayout>
</template>
