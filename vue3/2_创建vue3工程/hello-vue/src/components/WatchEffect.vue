<template>
    <div>WatchEffect</div>
    <div>{{ person.age }}</div>
    <button @click="incrementAge">+</button>
    <button @click="decrementAge">-</button>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue';

const person = reactive({ name: '张三', age: 18 });

// 使用 watchEffect 来监听 person.age 的变化
watchEffect(() => {
    console.log('count change', person.age);
});

// 定义增加年龄的方法
function incrementAge() {
    person.age++;
}

// 定义减少年龄的方法
function decrementAge() {
    person.age--;
}
</script>