<template>
    <div>
        <div class="Library">
            <h2><span><img src="@/assets/book.svg" alt="library"></span>Library</h2>
            <div class="user-container">
                <div class="userNameDiv">
                    <p class="userName">{{ userName }}</p>
                </div>
                <div class="avatar">
                    <el-avatar :size="40" :key="fit" :src="circleUrl" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'

const state = reactive({
    fit: 'fill',
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const { circleUrl , fit } = toRefs(state)

const userName = ref('Anthony')
</script>

<style scoped>
.Library {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #d8d8d8;
}

img {
    height: 30px;
    width: 30px;
}



h2 {
    display: flex;
    justify-content: center;
    width: 5em;
    margin-left: 2%;
}

.user-container {
    display: flex;
    align-items: center;
    margin-right: 2%;
}

.userNameDiv {
    display: flex;
    align-items: center;
    margin-right: 16px;
}
.userNameDiv p{
    margin: 0;
}
</style>