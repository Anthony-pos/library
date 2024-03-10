<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const inputA = ref('')
const inputB = ref('')
const router = useRouter();
const loginSubmit = () => {
    if(inputA.value === '1' && inputB.value ==='1' ){
        router.push('/main')
    }
}
const registerClick = () => {
    router.push('/Register')
}
</script>
<template>
    <video autoplay muted loop>
        <source src="@/assets/paper-planes.mp4" type="video/mp4">
    </video>
    <form @submit.prevent>
        <div>
            <h3>Login</h3>
        </div>
        <el-input v-model="inputA" style="width: 240px; margin: 1em auto;" placeholder="Please input account" />
        <el-input v-model="inputB" style="width: 240px; margin: 1em auto;" type="password"
            placeholder="Please input password" show-password />
        <div class="mb-4" style="display: flex; justify-content: center; margin-top: 1em;">
            <el-button type="primary" color="#626aef" plain @click="loginSubmit">login</el-button>
        </div>
        <div>
            <p><el-link type="primary" @click.stop="registerClick">Don’t have an account? Create</el-link></p>
        </div>
    </form>
</template>
