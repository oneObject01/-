<template>
    <div class="p-8 max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-4">记账本 - 创建收支记录</h1>
      <el-form :model="form" label-width="80px">
        <el-form-item label="类型">
          <el-radio-group v-model="form.type">
            <el-radio label="收入">收入</el-radio>
            <el-radio label="支出">支出</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="form.amount" placeholder="请输入金额"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
            v-model="form.time"
            type="datetime"
            placeholder="选择日期和时间"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark" placeholder="请输入备注"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  // 表单数据
  const form = ref({
    userId: "67c5b7f8c1851f28b5aecffb",
    type: '收入',
    amount: '',
    time: new Date(), // 直接使用 Date 对象
    remark: ''
  });
  
  // 提交表单
  const submitForm = () => {
    // 这里可以添加提交表单的逻辑，例如发送请求到后端
    console.log('提交表单数据:', form.value);
    axios.post('http://127.0.0.1:3000/api/record/create', form.value,{
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    // 提交成功后可以重置表单
    resetForm();
  };
  
  // 重置表单
  const resetForm = () => {
    form.value = {
      userId: "67c5b7f8c1851f28b5aecffb",
      type: '收入',
      amount: '',
      time: new Date(), // 直接使用 Date 对象
      remark: ''
    };
  };
  </script>
  
  <style scoped>
  /* 可以在这里添加自定义样式 */
  </style>