import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `QSD Electric Autos | ${to.meta.title}`
  } else {
    document.title = `QSD Electric Autos`
  }

  next()
})
export default router
