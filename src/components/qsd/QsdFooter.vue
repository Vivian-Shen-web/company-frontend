<script setup lang="ts">
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  MailOutlined,
  ShopOutlined
} from '@ant-design/icons-vue'

import { asset, footerVehicleGroups, siteContact } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdFooter'
})

const qsdStore = useQsdStore()
</script>

<template>
  <footer class="site-footer">
    <div class="page-shell footer-inner">
      <div class="footer-brand">
        <RouterLink to="/">
          <img :src="asset('qsd-logo.png')" alt="QSD" />
        </RouterLink>
      </div>

      <div class="footer-links">
        <h3>QUICK LINKS</h3>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About us</RouterLink>
        <RouterLink to="/">Vehicles</RouterLink>
        <RouterLink to="/factory">R&amp;D</RouterLink>
        <RouterLink to="/blog">Blogs</RouterLink>
        <RouterLink to="/contact">Contact us</RouterLink>
        <button type="button" @click="qsdStore.openDealer" class="pl-0">Become a Dealer</button>
      </div>

      <div class="footer-products">
        <h3>Vehicles</h3>
        <div v-for="group in footerVehicleGroups" :key="group[0]" class="footer-product-group">
          <strong>{{ group[0] }}</strong>
          <span v-for="item in group.slice(1)" :key="item">{{ item }}</span>
        </div>
      </div>

      <div class="footer-meta">
        <div class="footer-social">
          <a
            :href="siteContact.socials.facebook"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <img :src="asset('social-facebook.svg')" alt="Facebook" />
          </a>
          <a
            :href="siteContact.socials.instagram"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img :src="asset('social-instagram.svg')" alt="Instagram" />
          </a>
          <a
            :href="siteContact.socials.youtube"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <img :src="asset('social-youtube.svg')" alt="YouTube" />
          </a>
        </div>
        <div class="footer-contact">
          <a :href="`mailto:${siteContact.email}`">
            <MailOutlined />
            <span>{{ siteContact.email }}</span>
          </a>
          <a :href="siteContact.whatsapp" target="_blank" rel="noreferrer">
            <ClockCircleOutlined />
            <span>{{ siteContact.phone }}</span>
          </a>
          <a :href="siteContact.maps" target="_blank" rel="noreferrer">
            <ShopOutlined />
            <span>{{ siteContact.companyAddress }}</span>
          </a>
          <a :href="siteContact.maps" target="_blank" rel="noreferrer">
            <EnvironmentOutlined />
            <span>{{ siteContact.factoryAddress }}</span>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>
          Copyright © 2026 QSPOWER GROUP CO., LIMITED | Powered by QSPOWER GROUP CO., LIMITED
        </span>
      </div>
    </div>
  </footer>
</template>
