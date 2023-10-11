import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadEventos from '../views/CadEventos.vue'
import FazerVenda from '../views/FazerVenda.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadEventos',
      name: 'cadEventos',
      component: () => import('../views/cadEventos.vue')
    },
    {
      path: '/fazerVenda',
      name: 'fazerVenda',
      component: () => import('../views/fazerVenda.vue')
    }
  ]
})

export default router
