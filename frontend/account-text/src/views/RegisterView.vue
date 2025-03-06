<template>
    <div class="LoginView bg-sky-200 h-screen flex justify-center items-center">
        <div class="loginCard bg-white w-[25rem] h-[35rem] overflow-hidden rounded-xl flex flex-col items-center shadow-3xl">
            <div class="title w-[25rem] h-[7rem] bg-sky-500 text-4xl tracking-[0.3rem] font-bold text-white mb-[3rem] flex justify-center items-center">
                天天记账本
            </div>
            <el-form v-model="form" label-width="auto" style="max-width: 600px" class="flex flex-col">
                <div class="mb-[3rem] text-2xl tracking-[0.5rem] text-center font-bold">注册</div>
                <el-form-item label="用户名">
                    <el-input v-model="form.username" style="width: 240px" placeholder="username" class="mb-[1rem]"/>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" style="width: 240px" placeholder="password" type="password" class="mb-[2rem]"/>
                </el-form-item>
                <div class="flex justify-between">
                    <el-form-item>
                        <el-button type="primary" class="w-[100px]" @click="registerUser">注册</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="w-[100px]"><a href="/">去登录</a></el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';

const form = ref({
    username: '',
    password: ''
})
const router = useRouter();

const registerUser = async () => {
    try {
        // 发送注册请求
        const response = await axios.post('http://127.0.0.1:3000/api/auth/register', form.value);
        console.log(response.data.message);
        // 注册成功，跳转到登录页面
        router.push('/');
    } catch (error) {
        console.error('注册失败:', error.response ? error.response.data.message : error.message);
    }
};
</script>

<style scoped>

</style>