<script setup lang="ts">
import { PlayCircleFilled } from '@ant-design/icons-vue'
import { computed, ref } from 'vue'

import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import QsdLayout from '@/components/qsd/QsdLayout.vue'
import QsdBottomCta from '@/components/qsd/QsdBottomCta.vue'
import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'QsdShortsPage'
})

const filters = ['All', 'Passenger', 'Cargo']
const activeFilter = ref('All')
const keyword = ref('')

const shorts = [
  {
    title: 'QSD L5 Passenger EV Product Overview',
    category: 'Passenger EV',
    views: '12.6K',
    duration: '0:58',
    poster: 'u61.png'
  },
  {
    title: 'QSD Cargo EV in Real Scenarios',
    category: 'Cargo EV',
    views: '9.8K',
    duration: '0:46',
    poster: 'u104.png'
  },
  {
    title: 'Inside QSD Factory Manufacturing',
    category: 'Factory',
    views: '18.3K',
    duration: '1:10',
    poster: 'workshop-1.png'
  },
  {
    title: 'Key Components and Durability Test',
    category: 'Factory',
    views: '7.9K',
    duration: '0:32',
    poster: 'workshop-3.png'
  },
  {
    title: 'Driving Experience with QSD L5',
    category: 'Passenger EV',
    views: '11.2K',
    duration: '0:40',
    poster: 'u63.png'
  },
  {
    title: 'Hill Climb & Performance Test',
    category: 'Cargo EV',
    views: '10.7K',
    duration: '0:41',
    poster: 'u106.png'
  }
]

const visibleShorts = computed(() =>
  shorts.filter((item) => {
    const matchFilter = activeFilter.value === 'All' || item.category.startsWith(activeFilter.value)
    const matchKeyword =
      !keyword.value.trim() || item.title.toLowerCase().includes(keyword.value.trim().toLowerCase())
    return matchFilter && matchKeyword
  })
)
</script>

<template>
  <QsdLayout>
    <QsdBreadcrumb current="Shorts" />
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
          <input v-model="keyword" type="search" placeholder="Search vehicles,features…" />
        </label>
      </div>

      <div class="shorts-grid">
        <article v-for="item in visibleShorts" :key="item.title" class="short-card">
          <div class="short-card__media">
            <img :src="asset(item.poster)" :alt="item.title" />
            <span class="short-card__views">{{ item.views }} views</span>
            <span class="short-card__duration">{{ item.duration }}</span>
            <span class="short-card__play"><PlayCircleFilled /></span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.category }}</p>
        </article>
      </div>
    </section>
    <QsdBottomCta />
  </QsdLayout>
</template>
