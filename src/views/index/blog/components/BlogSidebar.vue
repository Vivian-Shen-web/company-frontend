<script setup lang="ts">
import { ref } from 'vue'

import { asset } from '@/services/qsd/qsdData'

defineOptions({
  name: 'BlogSidebar'
})

const popularPosts = [
  'Your Monthly Expenses Are All Over the Map. Here Is How to Fix That.',
  'Electric Tricycle Telematics and IoT Integration Guide.',
  'Electric Tricycle Charging at Home and Workplace Guide.',
  'Electric Tricycle Load Capacity: How to Set a Safe Working Limit.'
]

const email = ref('')
const subscribed = ref(false)

const subscribe = () => {
  if (!email.value.trim()) return
  subscribed.value = true
  email.value = ''
}
</script>

<template>
  <aside class="blog-side">
    <div class="blog-side__card blog-popular">
      <h3>POPULAR POSTS</h3>
      <span class="blog-side__rule" />
      <ol>
        <li v-for="(post, index) in popularPosts" :key="post">
          <span class="blog-popular__num">{{ index + 1 }}</span>
          <p>{{ post }}</p>
        </li>
      </ol>
    </div>

    <div class="blog-side__card blog-newsletter">
      <h3>NEWSLETTER</h3>
      <span class="blog-side__rule" />
      <p class="blog-newsletter__desc">Get the latest insights and updates from QSD.</p>
      <form @submit.prevent="subscribe">
        <input
          v-model="email"
          type="email"
          placeholder="Your email address"
          aria-label="Your email address"
        />
        <button type="submit">Subscribe →</button>
      </form>
      <p v-if="subscribed" class="blog-newsletter__done">Thank you. You’re subscribed.</p>
    </div>

    <div class="blog-side__card blog-contact">
      <div class="blog-contact__icon">
        <img :src="asset('u1663.svg')" alt="" />
        <img class="blog-contact__arc" :src="asset('u1662.svg')" alt="" />
      </div>
      <h3>Contact Us</h3>
      <p>Get expert advice on model selection, customisation and fleet solutions.</p>
      <RouterLink class="blog-contact__button" to="/contact">Contact Us →</RouterLink>
    </div>
  </aside>
</template>
