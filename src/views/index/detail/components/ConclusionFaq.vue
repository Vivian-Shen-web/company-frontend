<script setup lang="ts">
defineOptions({
  name: 'ConclusionFaq'
})

const faqs = [
  {
    question: '1. What makes the QSD SUN1+3 different from other electric three-wheelers?',
    answer:
      'QSD SUN1+3 is designed for comfortable, practical, and efficient urban passenger transportation. With its modern exterior styling, passenger-focused cabin layout, and all-electric powertrain, it offers a smart mobility solution for everyday city travel and commercial passenger services.'
  },
  {
    question: '2. What is the driving range of the QSD SUN1+3 on a single charge?',
    answer:
      'The QSD SUN1+3 delivers an endurance mileage of 80–100 km on a single charge under normal urban load conditions.'
  },
  {
    question: '3. How long does it take to fully charge the QSD SUN1+3?',
    answer:
      'A full charge typically takes 6–8 hours with the standard charger, and opportunity charging can be arranged around daily operating schedules.'
  },
  {
    question: '4. What safety and comfort features does the QSD SUN1+3 offer?',
    answer:
      'The vehicle features front and rear oil drum brakes, a U hydraulic shock absorber, a digital dashboard display, integrated LED turn-signal mirrors and a driver-focused control layout for safer, more comfortable trips.'
  },
  {
    question: '5. What is the passenger capacity of the QSD SUN1+3?',
    answer: 'The QSD SUN1+3 uses a 1+3 seating layout — one driver plus three passengers.'
  }
]
</script>

<template>
  <section class="detail-conclusion">
    <div class="page-shell">
      <h2 class="detail-section-title">Conclusion</h2>
      <p class="conclusion-text">
        QSD-SUN 1+3 is an efficient electric three-wheeler featuring open-sided cabin and 72V
        permanent magnet synchronous motor. With 1+3 seating layout, driver-friendly controls and
        good running economy, it offers a comfortable, profitable urban passenger transport
        option.<br />
        Discover more electric mobility products from QSD.
      </p>
      <h2 class="detail-section-title detail-section-title--faq">FAQ</h2>
      <a-collapse class="detail-faq" :bordered="false" expand-icon-position="end">
        <a-collapse-panel v-for="item in faqs" :key="item.question" :header="item.question">
          <p>{{ item.answer }}</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </section>
</template>
