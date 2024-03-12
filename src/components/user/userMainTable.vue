<template>
    <el-table :data="tableData" style="width: 100%" class="el-mainTable">
        <el-table-column prop="number" label="编号" width="180" />
        <el-table-column prop="id" label="唯一id" width="180" />
        <el-table-column prop="name" label="书名" />
        <el-table-column prop="holder" label="上传者" />
        <el-table-column prop="date" label="上传时间" />
    </el-table>
</template>

<script setup lang="ts">
const tableData = [
    {
        number: 1,
        id: 1,
        holder: 'Tom',
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        number: 2,
        id: 2,
        holder: 'Tom',
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        number: 3,
        id: 3,
        holder: 'Tom',
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        number: 4,
        id: 4,
        holder: 'Tom',
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<style scoped>
.el-mainTable{
    margin: 0 auto;
}
</style>