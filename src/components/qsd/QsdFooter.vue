<script setup lang="ts">
import { useQsdStore } from '@/stores/modules/qsd'
import { asset, footerVehicleGroups } from '@/views/index/data/qsdData'

defineOptions({
  name: 'QsdFooter'
})

const qsdStore = useQsdStore()
</script>

<template>
  <footer class="site-footer">
    <div class="page-shell footer-inner">
      <div>
        <img :src="asset('u1342.png')" alt="QSD" />
        <p>© 2026 QSD. All rights reserved.</p>
      </div>
      <div>
        <h3>QUICK LINKS</h3>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/vehicles">Vehicles</RouterLink>
        <RouterLink to="/dealer">Dealer &amp; Service</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
      <div class="footer-products">
        <h3>Vehicles</h3>
        <div v-for="group in footerVehicleGroups" :key="group[0]">
          <strong>{{ group[0] }}</strong>
          <span v-for="item in group.slice(1)" :key="item">{{ item }}</span>
        </div>
      </div>
      <div>
        <h3>CONTACT</h3>
        <span>info@qsd.com</span>
        <span>Whats App</span>
        <RouterLink to="/factory">ODM / R&amp;D</RouterLink>
        <button type="button" @click="qsdStore.openInquiry">Become a Dealer</button>
      </div>
    </div>
  </footer>
</template>
