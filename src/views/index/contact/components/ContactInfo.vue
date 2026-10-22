<script setup lang="ts">
defineOptions({
  name: 'ContactInfo'
})
</script>

<template>
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
</template>
