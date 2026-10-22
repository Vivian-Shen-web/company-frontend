import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

console.log(routes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `协和麻醉科 | ${to.meta.title}`
  } else {
    document.title = `协和麻醉科`
  }

  next()
})
export default router
