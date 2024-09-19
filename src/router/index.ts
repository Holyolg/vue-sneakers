import { createRouter, createWebHistory } from 'vue-router'

import FavoritesView from '../views/FavoritesView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/favorites',
    component: FavoritesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
