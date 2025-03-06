import './assets/main.css'
import axios from 'axios';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 创建一个 axios 实例
const api = axios.create();

// 为 axios 实例配置请求拦截器
api.interceptors.request.use(
    config => {
      console.log('进入请求拦截器');
      const token = localStorage.getItem('token');
      console.log('从 localStorage 获取的 token:', token);
      if (token) {
        console.log('设置 Authorization 请求头');
        config.headers.Authorization = `${token}`;
      }
      console.log('最终的请求配置:', config);
      return config;
    },
    error => {
      console.error('请求拦截器出错:', error);
      return Promise.reject(error);
    }
  );

const app = createApp(App)

// 将 axios 实例挂载到全局属性上
app.config.globalProperties.$axios = api;

app.use(createPinia())
app.use(router)

app.mount('#app')
