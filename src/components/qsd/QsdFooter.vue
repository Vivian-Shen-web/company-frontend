<script setup lang="ts">
import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
  WhatsAppOutlined,
  YoutubeFilled
} from '@ant-design/icons-vue'

import { asset, footerVehicleGroups } from '@/services/qsd/qsdData'

defineOptions({
  name: 'QsdFooter'
})
</script>

<template>
  <footer class="site-footer">
    <div class="page-shell footer-inner">
      <div class="footer-brand">
        <img :src="asset('u322.png')" alt="QSD" />
      </div>
      <div class="footer-products">
        <h3>Vehicles</h3>
        <div v-for="group in footerVehicleGroups" :key="group[0]">
          <strong>{{ group[0] }}</strong>
          <span v-for="item in group.slice(1)" :key="item">{{ item }}</span>
        </div>
      </div>
      <div class="footer-links">
        <h3>QUICK LINKS</h3>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">Vehicles</RouterLink>
        <RouterLink to="/dealer">Dealer &amp; Service</RouterLink>
        <RouterLink to="/factory">Become a Dealer</RouterLink>
        <RouterLink to="/factory">ODM / R&amp;D</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
      <div class="footer-bottom">
        <span>© 2026 QSD. All rights reserved.</span>
        <div class="footer-social">
          <FacebookFilled />
          <InstagramOutlined />
          <YoutubeFilled />
        </div>
        <div class="footer-contact">
          <span><MailOutlined /> info@qsd.com</span>
          <span><WhatsAppOutlined /> Whats App</span>
        </div>
      </div>
    </div>
  </footer>
</template>
