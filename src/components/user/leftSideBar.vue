<template>
    <el-col :span="4" class="sideBarContainer">
        <h5 class="mb-2">Default colors</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3">
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <span>Navigator Four</span>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script setup lang="ts">

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.sideBarContainer{
    border-right: 1px solid #757575;
}
</style>