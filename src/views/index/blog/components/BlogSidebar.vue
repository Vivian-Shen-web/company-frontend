<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRightOutlined } from '@ant-design/icons-vue'

defineOptions({
  name: 'BlogSidebar'
})

const popularPosts = [
  'Your Monthly Expenses Are All Over the Map. Here’s How to Fix That.',
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
    <div class="blog-side__card">
      <h3>POPULAR POSTS</h3>
      <ol>
        <li v-for="(post, index) in popularPosts" :key="post">
          <span>{{ index + 1 }}</span>
          <p>{{ post }}</p>
        </li>
      </ol>
    </div>

    <div class="blog-side__card blog-newsletter">
      <h3>NEWSLETTER</h3>
      <p>Get the latest insights and updates from QSD.</p>
      <form @submit.prevent="subscribe">
        <input
          v-model="email"
          type="email"
          placeholder="Your email address"
          aria-label="Your email address"
        />
        <button type="submit">
          Subscribe
          <ArrowRightOutlined />
        </button>
      </form>
      <p v-if="subscribed" class="blog-newsletter__done">Thank you. You’re subscribed.</p>
    </div>

    <div class="blog-side__card blog-contact">
      <h3>Contact Us</h3>
      <p>Get expert advice on model selection, customisation and fleet solutions.</p>
      <RouterLink to="/contact">Contact Us <ArrowRightOutlined /></RouterLink>
    </div>
  </aside>
</template>
