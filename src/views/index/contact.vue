<script setup lang="ts">
import { message } from 'ant-design-vue'

import QsdLayout from '@/components/qsd/QsdLayout.vue'

defineOptions({
  name: 'QsdContactPage'
})

const submitContact = () => {
  message.success('Thanks, QSD team will contact you soon.')
}
</script>

<template>
  <QsdLayout>
    <section class="contact-hero">
      <div class="page-shell">
        <p class="eyebrow">CONTACT US</p>
        <h1>
          <span>Let's talk about your</span><br />
          <strong>next EV project.</strong>
        </h1>
        <p>
          Dealer inquiries, fleet orders, OEM partnerships and custom development - our team responds
          within one business day.
        </p>
      </div>
    </section>
    <section class="contact-section page-shell">
      <a-form layout="vertical" class="contact-form">
        <h2>Send us a message</h2>
        <div class="two-col">
          <a-form-item label="First name *"><a-input size="large" placeholder="John" /></a-form-item>
          <a-form-item label="Last name *"><a-input size="large" placeholder="Smith" /></a-form-item>
        </div>
        <div class="two-col">
          <a-form-item label="Email *"><a-input size="large" placeholder="you@company.com" /></a-form-item>
          <a-form-item label="Phone / WhatsApp *"><a-input size="large" placeholder="+86 138 0000 0000" /></a-form-item>
        </div>
        <a-form-item label="Company / Brand"><a-input size="large" placeholder="Your company name" /></a-form-item>
        <a-form-item label="I am interested in">
          <a-select size="large" default-value="Becoming a dealer">
            <a-select-option value="Becoming a dealer">Becoming a dealer</a-select-option>
            <a-select-option value="Fleet order">Fleet order</a-select-option>
            <a-select-option value="OEM partnership">OEM partnership</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Message"><a-textarea :rows="5" placeholder="Tell us about your requirement..." /></a-form-item>
        <a-checkbox checked>I agree to be contacted by QSD about this enquiry.</a-checkbox>
        <button class="primary-pill form-submit" type="button" @click="submitContact">Send Message →</button>
        <p class="privacy">We respect your privacy - no spam, ever.</p>
      </a-form>
      <aside class="contact-info">
        <RouterLink class="ghost-pill ghost-pill--cyan" to="/dealer">Find a Dealer in India →</RouterLink>
        <dl>
          <dt>First name</dt>
          <dd>QIANG SHENG (QSD)<br />Manufacturing &amp; R&amp;D headquarters</dd>
          <dt>Email</dt>
          <dd>info@qsd.com<br />OEM &amp; export: sales@qsd.com</dd>
          <dt>WhatsApp</dt>
          <dd>+86 182 5401 5279<br />Mon-Sat, 9:00-18:00 (GMT+8)</dd>
        </dl>
      </aside>
    </section>
  </QsdLayout>
</template>
