import { createMemoryHistory, createRouter } from 'vue-router'
//导入路由页面
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'
//设置路由页面url路径
const routes = [
  { path: '/', component: Login },
  { path: '/about', component: Register },
]
//创建路由
export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})