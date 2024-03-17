<template>
    <headerBar />
    <div class="container">
        <leftSideBar />
        <mainTable />
        <rightSideBar />
    </div>
</template>

<script setup lang="ts">
import headerBar from '@/components/headerBar.vue';
import mainTable from '@/components/user/userMainTable.vue';
import leftSideBar from '@/components/user/leftSideBar.vue';
import rightSideBar from '@/components/user/rightSideBar.vue';
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}
</style>