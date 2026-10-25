<script setup lang="ts">
import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'FactoryContent'
})

const qsdStore = useQsdStore()

interface IconPart {
  src: string
  left: number
  top: number
  width: number
  height: number
}

interface IconGroup {
  width: number
  height: number
  parts: IconPart[]
}

const iconStyle = (icon: IconGroup) => ({
  width: `${icon.width}px`,
  height: `${icon.height}px`
})

const partStyle = (part: IconPart) => ({
  left: `${part.left}px`,
  top: `${part.top}px`,
  width: `${part.width}px`,
  height: `${part.height}px`
})

const designPoints = [
  'Concept design & styling',
  'Engineering & prototyping',
  'Component development',
  'Performance optimisation',
  'Exclusive models for your brand'
]

const manufacturingFeatures = [
  {
    label: 'Automated robotic systems',
    icon: {
      width: 36,
      height: 31,
      parts: [
        { src: 'u1198.svg', left: 0, top: 0, width: 33, height: 24 },
        { src: 'u1199.svg', left: 10, top: 4, width: 13, height: 26 },
        { src: 'u1200.svg', left: 7, top: 29, width: 14, height: 2 },
        { src: 'u1201.svg', left: 19, top: 13, width: 17, height: 16 },
        { src: 'u1202.svg', left: 24, top: 18, width: 7, height: 7 }
      ]
    }
  },
  {
    label: 'CED plant',
    icon: {
      width: 37,
      height: 35,
      parts: [
        { src: 'u1194.svg', left: 0, top: 0, width: 37, height: 35 },
        { src: 'u1195.svg', left: 7, top: 10, width: 22, height: 13 },
        { src: 'u1196.svg', left: 1, top: 5, width: 36, height: 30 }
      ]
    }
  },
  {
    label: 'In-house paint facility',
    icon: {
      width: 41,
      height: 38,
      parts: [
        { src: 'u1190.svg', left: 3, top: 6, width: 34, height: 32 },
        { src: 'u1191.svg', left: 12, top: 6, width: 23, height: 31 },
        { src: 'u1192.svg', left: 0, top: 0, width: 41, height: 38 }
      ]
    }
  },
  {
    label: 'Press shop',
    icon: {
      width: 38,
      height: 37,
      parts: [
        { src: 'u1179.svg', left: 5, top: 15, width: 27, height: 3 },
        { src: 'u1180.svg', left: 5, top: 0, width: 30, height: 32 },
        { src: 'u1181.svg', left: 5, top: 1, width: 31, height: 5 },
        { src: 'u1182.svg', left: 2, top: 5, width: 34, height: 7 },
        { src: 'u1183.svg', left: 0, top: 5, width: 38, height: 32 },
        { src: 'u1184.svg', left: 0, top: 31, width: 38, height: 3 },
        { src: 'u1185.svg', left: 0, top: 5, width: 38, height: 32 }
      ]
    }
  },
  {
    label: 'Advanced machinery',
    icon: {
      width: 38,
      height: 34,
      parts: [
        { src: 'u1187.svg', left: 0, top: 0, width: 38, height: 34 },
        { src: 'u1188.svg', left: 5, top: 21, width: 29, height: 8 }
      ]
    }
  }
]

const processSteps = [
  {
    label: 'Design &\nEngineering',
    icon: {
      width: 100,
      height: 100,
      parts: [{ src: 'u1261.svg', left: 23, top: 22, width: 54, height: 54 }]
    }
  },
  {
    label: 'Prototyping &\nTesting',
    icon: {
      width: 100,
      height: 100,
      parts: [
        { src: 'u1276.svg', left: 22, top: 35, width: 10, height: 33 },
        { src: 'u1277.svg', left: 30, top: 38, width: 46, height: 26 },
        { src: 'u1278.svg', left: 30, top: 38, width: 46, height: 26 },
        { src: 'u1279.svg', left: 69, top: 34, width: 8, height: 8 },
        { src: 'u1280.svg', left: 69, top: 37, width: 9, height: 27 },
        { src: 'u1281.svg', left: 31, top: 26, width: 47, height: 49 }
      ]
    }
  },
  {
    label: 'Tooling &\nProduction',
    icon: {
      width: 100,
      height: 100,
      parts: [
        { src: 'u1265.svg', left: 34, top: 20, width: 42, height: 57 },
        { src: 'u1266.svg', left: 41, top: 19, width: 36, height: 53 },
        { src: 'u1267.svg', left: 52, top: 21, width: 24, height: 22 },
        { src: 'u1268.svg', left: 40, top: 24, width: 28, height: 5 },
        { src: 'u1269.svg', left: 23, top: 18, width: 50, height: 64 }
      ]
    }
  },
  {
    label: 'Assembly &\nQuality Check',
    icon: {
      width: 100,
      height: 100,
      parts: [{ src: 'u1272.svg', left: 21, top: 20, width: 58, height: 60 }]
    }
  },
  {
    label: 'Mass Production\n& Delivery',
    icon: {
      width: 100,
      height: 100,
      parts: [
        { src: 'u1283.svg', left: 23, top: 23, width: 54, height: 55 },
        { src: 'u1284.svg', left: 47, top: 41, width: 12, height: 9 }
      ]
    }
  }
]

const partnershipItems = [
  {
    label: 'Design & innovation\n(China)',
    icon: {
      width: 47,
      height: 55,
      parts: [{ src: 'u1220.svg', left: 0, top: 0, width: 47, height: 55 }]
    }
  },
  {
    label: 'Manufacturing scale\n(China)',
    icon: {
      width: 54,
      height: 41,
      parts: [
        { src: 'u1224.svg', left: 0, top: 0, width: 54, height: 41 },
        { src: 'u1223.svg', left: 7, top: 7, width: 27, height: 16 }
      ]
    }
  },
  {
    label: 'Market insight\n(India)',
    icon: {
      width: 49,
      height: 47,
      parts: [{ src: 'u1221.svg', left: 0, top: 0, width: 49, height: 47 }]
    }
  },
  {
    label: 'Long-term growth\n(together)',
    icon: {
      width: 44,
      height: 44,
      parts: [
        { src: 'u1226.svg', left: 0, top: 0, width: 44, height: 44 },
        { src: 'u1227.svg', left: 4, top: 7, width: 33, height: 33 }
      ]
    }
  }
]

const whyItems = [
  {
    title: 'High-speed L5 platform',
    copy: 'Faster mobility for higher productivity and better business outcomes.',
    icon: {
      width: 112,
      height: 110,
      parts: [
        { src: 'u1251.svg', left: 0, top: 0, width: 112, height: 110 },
        { src: 'u1252.svg', left: 29, top: 20, width: 54, height: 47 }
      ]
    }
  },
  {
    title: 'Long-range lithium battery',
    copy: 'More range, less downtime, maximum efficiency.',
    icon: {
      width: 83,
      height: 120,
      parts: [
        { src: 'u1259.svg', left: 28, top: 0, width: 28, height: 10 },
        { src: 'u1260.svg', left: 0, top: 16, width: 83, height: 104 },
        { src: 'u1258.svg', left: 28, top: 29, width: 28, height: 72 }
      ]
    }
  },
  {
    title: 'Lower running cost per km',
    copy: 'Save more every kilometer with electric power.',
    icon: {
      width: 96,
      height: 97,
      parts: [{ src: 'u1253.svg', left: 0, top: 0, width: 96, height: 97 }]
    }
  },
  {
    title: 'Built for tough Indian roads',
    copy: 'Rugged design and reliable performance in all conditions.',
    icon: {
      width: 82,
      height: 95,
      parts: [
        { src: 'u1255.svg', left: 0, top: 0, width: 82, height: 95 },
        { src: 'u1256.svg', left: 19, top: 28, width: 46, height: 36 }
      ]
    }
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
        <p class="factory-design__intro">
          Our in-house design taam and experienced R&amp;D professionals work on next-generation
          electric vehicle concepts, developing custom solutions based on your brand and market
          requirements.
        </p>
        <ul class="factory-design__points">
          <li v-for="point in designPoints" :key="point">
            <img :src="asset('u1159.svg')" alt="" />
            {{ point }}
          </li>
        </ul>
        <button class="factory-outline-btn" type="button" @click="qsdStore.openInquiry">
          Explore our capabllities →
        </button>
      </div>
      <img class="factory-design__image" :src="asset('u1165.svg')" alt="QSD design and R&amp;D" />
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
              <span class="factory-capacity__icon">
                <span class="factory-icon" :style="iconStyle(feature.icon)">
                  <img
                    v-for="(part, index) in feature.icon.parts"
                    :key="index"
                    :src="asset(part.src)"
                    :style="partStyle(part)"
                    alt=""
                  />
                </span>
              </span>
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
          <span class="factory-step-icon">
            <span class="factory-icon" :style="iconStyle(step.icon)">
              <img
                v-for="(part, partIndex) in step.icon.parts"
                :key="partIndex"
                :src="asset(part.src)"
                :style="partStyle(part)"
                alt=""
              />
            </span>
          </span>
          <h3>{{ step.label }}</h3>
          <img
            v-if="index < processSteps.length - 1"
            class="factory-step-arrow"
            :src="asset('u1207.svg')"
            alt=""
          />
        </article>
      </div>
    </section>

    <section class="factory-partnership" :style="{ backgroundImage: `url(${asset('u1212.png')})` }">
      <div class="page-shell factory-partnership__content">
        <p class="factory-eyebrow">CHINA – INDIA PARTNENSHIP</p>
        <h2>Two markets. One vision.</h2>
        <p class="factory-partnership__intro">
          We bring China's manufacturing depth and engineering excellence together with India's
          market understanding, customer insight and distribution strength – to create EV solutions
          that truly work for Indian roads and global markets.
        </p>
        <div class="factory-partnership__items">
          <div v-for="item in partnershipItems" :key="item.label">
            <span class="factory-partnership__icon">
              <span class="factory-icon" :style="iconStyle(item.icon)">
                <img
                  v-for="(part, partIndex) in item.icon.parts"
                  :key="partIndex"
                  :src="asset(part.src)"
                  :style="partStyle(part)"
                  alt=""
                />
              </span>
            </span>
            <span class="factory-partnership__label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="factory-why page-shell">
      <h2>WHY QSD</h2>
      <div class="factory-why__grid">
        <article v-for="item in whyItems" :key="item.title">
          <div class="factory-why__icon">
            <span class="factory-icon" :style="iconStyle(item.icon)">
              <img
                v-for="(part, partIndex) in item.icon.parts"
                :key="partIndex"
                :src="asset(part.src)"
                :style="partStyle(part)"
                alt=""
              />
            </span>
          </div>
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
            <span v-for="(point, index) in oemPoints" :key="index">
              <img :src="asset('u1230.svg')" alt="" />
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
