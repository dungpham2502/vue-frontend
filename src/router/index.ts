import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
  ],
})

export default router
