<template>
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-4">记账记录</h1>
      <el-table :data="records" stripe>
        <el-table-column prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
        <el-table-column prop="amount" label="金额" width="100">
          <template #default="{ row }">
            {{ row.amount }} 元
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类型" width="100">
          <template #default="{ row }">
            <span :class="getTypeClass(row.type)">{{ row.type }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 模拟记账记录数据
  const records = ref([
    {
      date: '2025-03-01',
      description: '购买日用品',
      amount: 200,
      type: '支出'
    },
    {
      date: '2025-03-02',
      description: '兼职收入',
      amount: 500,
      type: '收入'
    },
    {
      date: '2025-03-03',
      description: '外出就餐',
      amount: 150,
      type: '支出'
    }
  ]);
  
  // 根据类型返回不同的样式类
  const getTypeClass = (type) => {
    return type === '收入' ? 'text-green-500' : 'text-red-500';
  };
  </script>
  
  <style scoped>
  
  </style>