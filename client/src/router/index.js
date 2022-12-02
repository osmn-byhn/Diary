import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
const kosul = false


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: kosul ? HomeView : Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})

export default router
