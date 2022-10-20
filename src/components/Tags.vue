<template>
    <el-tag v-for="item in list" :key="item.id" round effect="plain" type="success">
        {{ item.name }}
    </el-tag>
</template>
<script setup>
import 'element-plus/theme-chalk/base.css';
import 'element-plus/theme-chalk/el-tag.css';
import { ElTag } from "element-plus";
defineProps(['list'])
</script>