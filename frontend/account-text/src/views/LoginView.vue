<template>
    <div class="LoginView bg-sky-200 h-screen flex justify-center items-center">
        <div class="loginCard bg-white w-[25rem] h-[35rem] overflow-hidden rounded-xl flex flex-col items-center shadow-3xl">
            <div class="title w-[25rem] h-[7rem] bg-sky-500 text-4xl tracking-[0.3rem] font-bold text-white mb-[3rem] flex justify-center items-center">
                天天记账本
            </div>
            <el-form label-width="auto" style="max-width: 600px" class="flex flex-col">
                <div class="mb-[3rem] text-2xl tracking-[0.3rem] font-bold flex justify-center items-center">登录</div>
                <el-input v-model=username style="width: 240px" placeholder="username" class="mb-[1rem]"/>
                <el-input v-model=password style="width: 240px" placeholder="password" type="password" class="mb-[2rem]"/>
                <div class="flex justify-between">
                    <el-button type="primary" class="w-[100px]">登录</el-button>
                    <el-button type="primary" class="w-[100px]"><a href="/register">去注册</a></el-button>
                </div>
            </el-form>
        </div>
    </div>

</template>

<script setup>
const username = ref('')
const password = ref('')
</script>

<style scoped>

</style>