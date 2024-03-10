import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import main from '@/views/main/main.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/Register', name: 'register', component: Register },
    { path: '/main', name: 'main', component: main },
  ]
})

export default router
