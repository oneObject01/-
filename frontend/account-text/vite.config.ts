import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()], // 支持 ElementPlus 组件的自动导入
      imports: ['vue', 'vue-router'], // 自动导入 Vue 和 Vue Router 的 API
      dts: 'src/auto-imports.d.ts' // 生成自动导入的类型声明文件
    }),
    // 配置 Components 插件
    Components({
      resolvers: [ElementPlusResolver()], // 支持 ElementPlus 组件的自动导入
      dts: 'src/components.d.ts' // 生成组件的类型声明文件
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
