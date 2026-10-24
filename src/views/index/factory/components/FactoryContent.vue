<script setup lang="ts">
import {
  BarChartOutlined,
  BuildOutlined,
  BulbOutlined,
  CheckCircleFilled,
  DollarCircleOutlined,
  ExperimentOutlined,
  RightOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined
} from '@ant-design/icons-vue'

import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'FactoryContent'
})

const qsdStore = useQsdStore()

const designPoints = [
  'Concept design & styling',
  'Engineering & prototyping',
  'Component development',
  'Performance optimisation',
  'Exclusive models for your brand'
]

const manufacturingFeatures = [
  { icon: 'u1194.svg', label: 'Automated robotic systems' },
  { icon: 'u1190.svg', label: 'CED plant' },
  { icon: 'u1179.svg', label: 'In-house paint facility' },
  { icon: 'u1187.svg', label: 'Press shop' },
  { icon: 'u1198.svg', label: 'Advanced machinery' }
]

const processSteps = [
  { icon: 'u1207.svg', label: 'Design &\nEngineering' },
  { icon: 'u1220.svg', label: 'Prototyping &\nTesting' },
  { icon: 'u1226.svg', label: 'Tooling &\nProduction' },
  { icon: 'u1223.svg', label: 'Assembly &\nQuality Check' },
  { icon: 'u1251.svg', label: 'Mass Production\n& Delivery' }
]

const partnershipItems = [
  { icon: BulbOutlined, label: 'Design & innovation\n(China)' },
  { icon: BuildOutlined, label: 'Manufacturing scale\n(China)' },
  { icon: ExperimentOutlined, label: 'Market insight\n(India)' },
  { icon: BarChartOutlined, label: 'Long-term growth\n(together)' }
]

const whyItems = [
  {
    icon: BarChartOutlined,
    title: 'High-speed L5 platform',
    copy: 'Faster mobility for higher productivity and better business outcomes.'
  },
  {
    icon: ThunderboltOutlined,
    title: 'Long-range lithium battery',
    copy: 'More range, less downtime, maximum efficiency.'
  },
  {
    icon: DollarCircleOutlined,
    title: 'Lower running cost per km',
    copy: 'Save more every kilometer with electric power.'
  },
  {
    icon: SafetyCertificateOutlined,
    title: 'Built for tough Indian roads',
    copy: 'Rugged design and reliable performance in all conditions.'
  }
]

const oemPoints = [
  'New model development',
  'New model development',
  'Dedicated OEM support',
  'Volume production.'
]
</script>

<template>
  <main class="factory-page">
    <section class="factory-design page-shell">
      <div class="factory-design__copy">
        <p class="factory-eyebrow">OUR DESIGN &amp; R&amp;D</p>
        <h2>Ideas. Technology. Tomorrow's mobility.</h2>
        <p>
          Our in-house design taam and experienced R&amp;D professionals work on next-generation
          electric vehicle concepts, developing custom solutions based on your brand and market
          requirements.
        </p>
        <ul>
          <li v-for="point in designPoints" :key="point">
            <CheckCircleFilled />
            {{ point }}
          </li>
        </ul>
        <button class="factory-outline-btn" type="button" @click="qsdStore.openInquiry">
          Explore our capabllities →
        </button>
      </div>
      <img class="factory-design__image" :src="asset('u1165.svg')" alt="QSD design and R&D" />
    </section>

    <section class="factory-excellence">
      <div class="page-shell factory-excellence__inner">
        <div class="factory-excellence__main">
          <h2>MANUFACTURING EXCELLENCE</h2>
          <p>Advanced facilities. Precision processes. Massive scale.</p>
          <img :src="asset('u1170.svg')" alt="QSD manufacturing line" />
        </div>
        <aside class="factory-capacity">
          <strong>50,000+</strong>
          <span>sets per month</span>
          <p>production capacity</p>
          <ul>
            <li v-for="feature in manufacturingFeatures" :key="feature.label">
              <img :src="asset(feature.icon)" alt="" />
              {{ feature.label }}
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="factory-process page-shell">
      <h2>OUR MANUFACTURING PROCESS</h2>
      <div class="factory-process__line">
        <article v-for="(step, index) in processSteps" :key="step.label">
          <span class="factory-step-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="factory-step-icon">
            <img :src="asset(step.icon)" alt="" />
          </div>
          <h3>{{ step.label }}</h3>
          <RightOutlined v-if="index < processSteps.length - 1" class="factory-step-arrow" />
        </article>
      </div>
    </section>

    <section class="factory-partnership" :style="{ backgroundImage: `url(${asset('u1212.png')})` }">
      <div class="page-shell factory-partnership__content">
        <p class="factory-eyebrow">CHINA – INDIA PARTNENSHIP</p>
        <h2>Two markets. One vision.</h2>
        <p>
          We bring China's manufacturing depth and engineering excellence together with India's
          market understanding, customer insight and distribution strength – to create EV solutions
          that truly work for Indian roads and global markets.
        </p>
        <div class="factory-partnership__items">
          <div v-for="item in partnershipItems" :key="item.label">
            <component :is="item.icon" />
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="factory-why page-shell">
      <h2>WHY QSD</h2>
      <div class="factory-why__grid">
        <article v-for="item in whyItems" :key="item.title">
          <component :is="item.icon" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.copy }}</p>
        </article>
      </div>
    </section>

    <section class="factory-oem">
      <div class="page-shell factory-oem__inner">
        <div>
          <p>For OEMs &amp; Brands</p>
          <h2>Let's build something great together.</h2>
          <div class="factory-oem__points">
            <span v-for="point in oemPoints" :key="point">
              <CheckCircleFilled />
              {{ point }}
            </span>
          </div>
        </div>
        <div class="factory-oem__actions">
          <button class="primary-pill" type="button" @click="qsdStore.openInquiry">
            Start a Project →
          </button>
          <RouterLink class="ghost-pill ghost-pill--light" to="/contact">Contact Us</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
