<script setup lang="ts">
import {
  BuildOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  ThunderboltOutlined
} from '@ant-design/icons-vue'

defineOptions({
  name: 'WhyQsd'
})

const whyPoints = [
  {
    title: 'Fully Enclosed Cabin Design',
    copy: 'Comfortable, safe and weather resistant for more application scenarios.',
    icon: SafetyCertificateOutlined
  },
  {
    title: 'Grade-A Steel & E-Coat',
    copy: 'High strength materials and anti-rust coating for long service life.',
    icon: BuildOutlined
  },
  {
    title: 'Long-Life Battery Systems',
    copy: 'Reliable lithium battery solutions with stable performance.',
    icon: ThunderboltOutlined
  },
  {
    title: 'In-House R&D Team',
    copy: 'Experienced engineers and continuous new model development.',
    icon: TeamOutlined
  },
  {
    title: 'Export Documentation',
    copy: 'Complete export documents and certifications for smooth customs clearance.',
    icon: FileTextOutlined
  },
  {
    title: 'After-Sales Parts Backup',
    copy: 'Full range of spare parts support and professional technical guidance.',
    icon: CustomerServiceOutlined
  }
]
</script>

<template>
  <section class="about-why">
    <div class="page-shell">
      <p class="about-eyebrow">WHY QSD</p>
      <h2>Why Choose QSD?</h2>
      <p class="about-subtitle">
        More than a manufacturer. A long-term partner for your electric mobility business.
      </p>
      <div class="about-why__grid">
        <article v-for="point in whyPoints" :key="point.title">
          <span class="about-why__icon">
            <component :is="point.icon" />
          </span>
          <div>
            <h3>{{ point.title }}</h3>
            <p>{{ point.copy }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
