<template>
    <div class="container">
        <div class="container-1">
            <h4>操作记录</h4>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180" />
                <el-table-column prop="operate" label="操作" width="180" />
            </el-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
const tableData = [
    {
        date: '2016-05-03',
        operate: '存入',
    }
]
</script>

<style scoped>
.container {
    width: 30vw;
    height: 100%;
    border: 1px solid #000000;
}

.container-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100%;
    margin-top: 20%;
    margin-bottom: 20%;
    border: 1px solid #000000;
}
</style>