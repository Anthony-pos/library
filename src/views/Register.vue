<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const inputA = ref('')
const inputB = ref('')
function registerSubmit() {

}
const router = useRouter();
const loginClick = () => {
    router.push('/')
}
</script>
<template>
    <video autoplay muted loop>
        <source src="@/assets/paper-planes.mp4" type="video/mp4">
    </video>
    <form @submit.prevent>
        <div>
            <h3>Register</h3>
        </div>
        <el-input v-model="inputA" style="width: 240px; margin: 0.5em auto;" placeholder="Please input account" />
        <el-input v-model="inputB" style="width: 240px; margin: 0.2em auto;" type="password"
            placeholder="Please input password" show-password />
        <el-input v-model="inputB" style="width: 240px; margin: 0.7em auto;" type="password"
            placeholder="Confirm password" show-password />
        <div class="mb-4" style="display: flex; justify-content: center; margin-top: 0.3em;">
            <el-button type="primary" color="#626aef" plain @click="registerSubmit">register</el-button>
        </div>
        <div>
            <p><el-link type="primary" @click.stop="loginClick">Already have an account? Log in</el-link></p>
        </div>
    </form>
</template>
