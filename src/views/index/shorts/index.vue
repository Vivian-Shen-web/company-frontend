<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import { asset } from '@/services/qsd/qsdData'
import ShortsCta from './components/ShortsCta.vue'

defineOptions({
  name: 'QsdShortsPage'
})

interface ShortItem {
  id: number
  title: string
  category: string
  views: string
  poster: string
}

const filters = ['All', 'Passenger', 'Cargo', 'Factory', 'Customer Stories']
const pageSize = 16

const baseShorts = [
  {
    title: 'QSD L5 Passenger EV Product Overview',
    category: 'Passenger EV',
    views: '12.6K',
    poster: 'short-1.png'
  },
  {
    title: 'QSD Cargo EV in Real Scenarios',
    category: 'Cargo EV',
    views: '9.8K',
    poster: 'short-2.png'
  },
  {
    title: 'Inside QSD Factory Manufacturing',
    category: 'Factory',
    views: '18.3K',
    poster: 'short-3.png'
  },
  {
    title: 'Key Components and Durability Test',
    category: 'Factory',
    views: '7.9K',
    poster: 'short-4.png'
  },
  {
    title: 'Driving Experience with QSD L5',
    category: 'Passenger EV',
    views: '11.2K',
    poster: 'short-5.png'
  },
  {
    title: 'Hill Climb & Performance Test',
    category: 'Performance',
    views: '10.7K',
    poster: 'short-6.png'
  },
  {
    title: 'Customer Story: QSD in Daily Business',
    category: 'Passenger EV',
    views: '8.9K',
    poster: 'short-7.png'
  },
  {
    title: 'QSD Model Lineup Overview',
    category: 'Passenger EV',
    views: '14.5K',
    poster: 'short-8.png'
  }
]

const shorts: ShortItem[] = Array.from({ length: baseShorts.length * 6 }, (_, index) => ({
  ...baseShorts[index % baseShorts.length],
  id: index
}))

const activeFilter = ref('All')
const keyword = ref('')
const currentPage = ref(1)

const matchesFilter = (item: ShortItem, filter: string) => {
  if (filter === 'All') return true
  if (filter === 'Customer Stories') return item.title.startsWith('Customer Story')
  if (filter === 'Passenger') return item.category === 'Passenger EV'
  if (filter === 'Cargo') return item.category === 'Cargo EV'
  return item.category === filter
}

const filteredShorts = computed(() => {
  const search = keyword.value.trim().toLowerCase()
  return shorts.filter(
    (item) =>
      matchesFilter(item, activeFilter.value) &&
      (!search || item.title.toLowerCase().includes(search))
  )
})

const pageCount = computed(() => Math.max(1, Math.ceil(filteredShorts.value.length / pageSize)))

const pageShorts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredShorts.value.slice(start, start + pageSize)
})

watch([activeFilter, keyword], () => {
  currentPage.value = 1
})
</script>

<template>
  <QsdLayout>
    <QsdBreadcrumb current="Shorts" />

    <section class="shorts-hero">
      <img class="shorts-hero__art" :src="asset('shorts-hero-baked.png')" alt="QSD Shorts" />
    </section>

    <section class="shorts-section page-shell">
      <div class="shorts-toolbar">
        <div class="shorts-filters">
          <button
            v-for="filter in filters"
            :key="filter"
            type="button"
            :class="['shorts-filter', { 'is-active': activeFilter === filter }]"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
        <label class="shorts-search">
          <input v-model="keyword" type="search" placeholder="Search vehicles, features..." />
        </label>
      </div>

      <div class="shorts-grid">
        <article v-for="item in pageShorts" :key="item.id" class="short-card">
          <div class="short-card__media">
            <img :src="asset(item.poster)" :alt="item.title" />
          </div>
          <h3>{{ item.title }}</h3>
          <div class="short-card__meta">
            <span
              :class="[
                'short-card__category',
                { 'is-brand': item.category === 'Passenger EV' || item.category === 'Cargo EV' }
              ]"
            >
              {{ item.category }}
            </span>
            <span class="short-card__views">
              <i class="short-card__views-icon" />
              {{ item.views }}
            </span>
          </div>
        </article>
      </div>

      <div class="shorts-pager">
        <button
          v-for="page in pageCount"
          :key="page"
          type="button"
          :class="['shorts-pager__page', { 'is-active': currentPage === page }]"
          @click="currentPage = page"
        >
          {{ page }}
        </button>
        <button
          class="shorts-pager__next"
          type="button"
          aria-label="Next page"
          :disabled="currentPage === pageCount"
          @click="currentPage = Math.min(pageCount, currentPage + 1)"
        >
          →
        </button>
      </div>
    </section>

    <ShortsCta />
  </QsdLayout>
</template>
