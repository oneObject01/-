<template>
    <div class="listView">
        <el-container class="h-screen"> 
            <el-aside class="bg-sky-200"></el-aside>
            <el-main class="min-w-[30rem] max-w-[30rem]">
                <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect">
                    <el-menu-item index="1" class="w-[6rem]"><router-link class="w-full h-full flex justify-center items-center" to="/home/create">创建</router-link></el-menu-item>
                    <el-menu-item index="2" class="w-[6rem]"><router-link class="w-full h-full flex justify-center items-center" to="/home/list">列表</router-link></el-menu-item>
                </el-menu>
                <router-view></router-view>
            </el-main>  
            <el-aside class="bg-sky-200"></el-aside>             
        </el-container>
    </div>
</template>

<script setup>

</script>

<style scoped>  

</style>