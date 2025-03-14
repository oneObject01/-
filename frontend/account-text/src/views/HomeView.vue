<template>
    <div class="listView">
        <el-row class="h-screen"> 
            <el-col :span="7" hidden-sm-and-down class="bg-sky-200"></el-col>
            <el-col :span="10" class="h-screen">
                <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect">
                    <el-menu-item index="1" class="w-[6rem]"><router-link class="w-full h-full flex justify-center items-center" to="/home/create">创建</router-link></el-menu-item>
                    <el-menu-item index="2" class="w-[6rem]"><router-link class="w-full h-full flex justify-center items-center" to="/home/list">列表</router-link></el-menu-item>
                </el-menu>
                <router-view></router-view>
            </el-col>  
            <el-col :span="7" hidden-sm-and-down class="bg-sky-200"></el-col>             
        </el-row>
    </div>
</template>

<script setup>
import 'element-plus/theme-chalk/display.css'
import { ref } from 'vue';
const activeIndex = ref('1');

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath);
};
</script>

<style scoped>  

</style>