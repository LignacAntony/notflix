import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/MoviesListView.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoriteListView.vue')
    }
  ]
})

export default router
