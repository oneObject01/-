import {createRouter,createWebHistory,type RouteRecordRaw} from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import HomeView from '@/views/HomeView.vue'
import Create from '@/views/Create.vue'
import List from '@/views/List.vue'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    children: [
      {
        path: '/home/create',
        name: 'Create',
        component: Create
      },
      {
        path: '/home/list',
        name: 'List',
        component: List
      }
    ]

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
