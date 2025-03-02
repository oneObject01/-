import {createRouter,createWebHistory,type RouteRecordRaw} from 'vue-router'
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'
import List from '@/views/ListView.vue'
import Create from '@/views/CreateView.vue'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
