<script setup lang="ts">
import { AimOutlined, BulbOutlined, HeartOutlined } from '@ant-design/icons-vue'

defineOptions({
  name: 'DrivingForces'
})

const drivingForces = [
  {
    title: 'Our Purpose',
    copy: 'To provide reliable, zero-emission mobility for real streets and real working conditions.',
    icon: AimOutlined
  },
  {
    title: 'Our Mission',
    copy: 'To deliver engineered electric tricycle platforms with full technical documentation and parts backup for global partners.',
    icon: HeartOutlined
  },
  {
    title: 'Our Vision',
    copy: 'To be the default manufacturing partner for distributors importing Chinese electric tricycles into mature markets.',
    icon: BulbOutlined
  }
]
</script>

<template>
  <section class="about-driving">
    <div class="page-shell">
      <p class="about-eyebrow">OUR DRIVING FORCES</p>
      <h2>Purpose, Mission &amp; Vision</h2>
      <div class="about-driving__grid">
        <article v-for="force in drivingForces" :key="force.title">
          <span class="about-driving__icon">
            <component :is="force.icon" />
          </span>
          <h3>{{ force.title }}</h3>
          <p>{{ force.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
