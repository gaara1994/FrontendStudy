<template>
    <div>
        <h1>生命周期</h1>
        <h2>sum:{{ sum }}</h2>
        <button @click="sum++">点击</button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue'

//数据
let sum = ref(0)
//生命周期
onMounted(() => {
    console.log('挂载成功')
})
onUpdated(() => {
    console.log('更新成功')
})
onBeforeUnmount(() => {
    console.log('卸载之前')
})

</script>