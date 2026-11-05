<script setup lang="ts">
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'AboutHero'
})
</script>

<template>
  <QsdBreadcrumb current="About us" />
  <section class="about-hero" :style="{ backgroundImage: `url(${asset('u1562.png')})` }">
    <div class="page-shell about-hero__inner">
      <div class="about-hero__copy">
        <h1>About us</h1>
        <span class="about-hero__rule" />
        <p>
          We are a professional electric vehicle manufacturer with
          <strong>25 years</strong> of experience in in-house design, engineering and export
          delivery.
        </p>
      </div>
    </div>
  </section>
</template>
