<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'AboutIntro'
})

const introPoints = [
  'Integrated design & engineering',
  'In-house stamping, welding and painting',
  'Automated assembly and testing lines',
  'OEM & ODM export capability',
  'Full-container after-sales parts support'
]
</script>

<template>
  <section class="about-intro page-shell">
    <div class="about-intro__copy">
      <p class="about-eyebrow">WHO ARE WE</p>
      <h2>Professional Electric Tricycle Manufacturer</h2>
      <p class="about-intro__lead">
        QIANG SHENG (QSD), a professional electric vehicle maker with 25 years of experience,
        integrates design, R&amp;D, production and global sales to offer reliable, high-quality and
        cost-effective electric mobility solutions to global clients.
      </p>
      <p class="about-intro__lead">
        Our modern manufacturing facilities, experienced technical team and complete supply chain
        system ensure stable quality, flexible customization and on-time delivery for every order.
      </p>
      <ul class="about-intro__points">
        <li v-for="point in introPoints" :key="point">
          <img :src="asset('u1230.svg')" alt="" />
          {{ point }}
        </li>
      </ul>
    </div>
    <img class="about-intro__image" :src="asset('about-intro.png')" alt="QSD factory entrance" />
  </section>
</template>
