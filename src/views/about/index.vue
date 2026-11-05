<script setup lang="ts">
import { CheckCircleFilled } from '@ant-design/icons-vue'

import QsdLayout from '@/components/qsd/QsdLayout.vue'
import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import QsdBottomCta from '@/components/qsd/QsdBottomCta.vue'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'QsdAboutPage'
})

const aboutPoints = [
  'Integrated design & engineering',
  'In-house stamping, welding and painting',
  'Automated assembly and testing lines',
  'OEM & ODM export capability',
  'Full-container after-sales parts support'
]

const drivingForces = [
  {
    title: 'Our Purpose',
    copy: 'To provide reliable, zero-emission mobility for real streets and real working conditions.'
  },
  {
    title: 'Our Mission',
    copy: 'To deliver engineered electric tricycle platforms with full technical documentation and parts backup for global partners.'
  },
  {
    title: 'Our Vision',
    copy: 'To be the default manufacturing partner for distributors importing Chinese electric tricycles into mature markets.'
  }
]

const whyPoints = [
  {
    title: 'Fully Enclosed Cabin Design',
    copy: 'Comfortable, safe and weather resistant for more application scenarios.'
  },
  {
    title: 'Grade-A Steel & E-Coat',
    copy: 'High strength materials and anti-rust coating for long service life.'
  },
  {
    title: 'Long-Life Battery Systems',
    copy: 'Reliable lithium battery solutions with stable performance.'
  },
  {
    title: 'In-House R&D Team',
    copy: 'Experienced engineers and continuous new model development.'
  },
  {
    title: 'Export Documentation',
    copy: 'Complete export documents and certifications for smooth customs clearance.'
  },
  {
    title: 'After-Sales Parts Backup',
    copy: 'Full range of spare parts support and professional technical guidance.'
  }
]

const workshops = [
  {
    title: 'Forging and Cutting Shop',
    copy: 'Cuts and forms steel, tubing, and sheet metal for accurate frames and structural parts. Precise processing supports better welding, assembly, and mass-production consistency.',
    image: asset('u461.png')
  },
  {
    title: 'Sheet Metal Shop',
    copy: 'Processes body panels, cargo boxes, outer shells, and bulkheads. Accurate sheet metal work improves exterior smoothness and component fit.',
    image: asset('u462.png')
  },
  {
    title: 'Welding Shop',
    copy: 'Welds frames, chassis, cargo beds, and body structures. Stable welding improves load capacity, durability, and reduces after-sales issues.',
    image: asset('u463.png')
  },
  {
    title: 'Electrocoating and Painting Shop',
    copy: 'Provides electrocoating and painting for rust resistance and surface protection. Proper treatment helps vehicles suit humid, hot, and rough environments.',
    image: asset('u464.png')
  },
  {
    title: 'Assembly Workshop',
    copy: 'Assembles motors, controllers, batteries, tires, seats, lights, and body parts. Standardized assembly improves vehicle consistency and bulk-order delivery.',
    image: asset('u465.png')
  },
  {
    title: 'Quality Inspection Department',
    copy: 'Inspects electrical systems, brakes, powertrain, exterior, and key components before shipment. Strict inspection helps reduce quality problems and after-sales pressure.',
    image: asset('u516.png')
  }
]
</script>

<template>
  <QsdLayout>
    <QsdBreadcrumb current="About us" />
    <section class="about-hero" :style="{ backgroundImage: `url(${asset('u13.png')})` }">
      <div class="page-shell about-hero__inner">
        <div class="about-hero__copy">
          <p class="eyebrow">WHO ARE WE</p>
          <h1>Professional Electric Tricycle Manufacturer</h1>
          <p class="about-hero__lead">
            QIANG SHENG (QSD), a professional electric vehicle maker with 25 years of experience,
            integrates design, R&amp;D, production and global sales to offer reliable, high-quality
            and cost-effective electric mobility solutions to global clients.
          </p>
          <ul class="about-hero__list">
            <li v-for="point in aboutPoints" :key="point">
              <CheckCircleFilled />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-driving page-shell">
      <p class="eyebrow">OUR DRIVING FORCES</p>
      <h2>Purpose, Mission &amp; Vision</h2>
      <div class="about-driving__grid">
        <article v-for="force in drivingForces" :key="force.title">
          <h3>{{ force.title }}</h3>
          <p>{{ force.copy }}</p>
        </article>
      </div>
    </section>

    <section class="about-why">
      <div class="page-shell">
        <p class="eyebrow">WHY QSD</p>
        <h2>Why Choose QSD?</h2>
        <p class="about-subtitle">
          More than a manufacturer. A long-term partner for your electric mobility business.
        </p>
        <div class="about-why__grid">
          <article v-for="point in whyPoints" :key="point.title">
            <h3>{{ point.title }}</h3>
            <p>{{ point.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="about-workshops page-shell">
      <p class="eyebrow">INSIDE THE FACTORY</p>
      <h2>Production Workshops in QSD</h2>
      <p class="about-subtitle">Advanced facilities. Professional processes. Reliable quality.</p>
      <div class="about-workshops__grid">
        <article v-for="workshop in workshops" :key="workshop.title">
          <img :src="workshop.image" :alt="workshop.title" />
          <h3>{{ workshop.title }}</h3>
          <p>{{ workshop.copy }}</p>
        </article>
      </div>
    </section>

    <section class="about-global">
      <div class="page-shell about-global__inner">
        <div class="about-global__copy">
          <p class="eyebrow">GLOBAL SERVICE</p>
          <h2>Serving Global Customers:</h2>
          <p>
            Our electric tricycles and mobility solutions have been exported to many countries and
            regions, serving distributors, fleet operators and government projects around the world.
          </p>
          <p>
            We are committed to providing reliable products, professional support and long-term
            cooperation, helping our customers build successful electric mobility businesses in
            their local markets.
          </p>
        </div>
        <img :src="asset('u465.png')" alt="QSD global service" />
      </div>
    </section>

    <QsdBottomCta />
  </QsdLayout>
</template>
