<template>
    <h1>监听基础类型数据</h1>
    <div>
        <label for="input">输入值：</label>
        <input type="text" id="input" v-model="inputValue">
        <p>大写形式：{{ uppercaseValue }}</p>
        <button @click="clearInput">清空</button>
    </div>
    <hr>
    <h1>监听引用类型</h1>
    <div>
        <p>姓名：{{ person.name }}</p>
        <p>年龄：{{ person.age }}</p>
        <!-- <button @click="person.age++">年龄+1</button> -->
        <button @click="ageAdd">年龄+1</button>
    </div>

</template>

<script setup lang="ts">
import { ref, watch, computed, reactive } from 'vue'
//声明基础属性
const inputValue = ref('')

//计算属性
const uppercaseValue = computed({
    get() {
        return inputValue.value.toUpperCase();
    },
    set(val) {
        inputValue.value = val;
    }
})

//使用watch 监听 inputValue的变化
watch(inputValue, (val) => {
    console.log('inputValue变化了', val);
}, { immediate: true, deep: true });

//清空inputValue
const clearInput = () => {
    inputValue.value = '';
}

// -------------------------------------------------------
// 监听引用类型
const person = reactive({ name: '张三', age: 18 })

// watch(person, (val) => {
//     console.log('person变化了', val);
// }, { deep: true });

// 监听引用类型的某个属性
watch(() => person.age, (val) => {
    console.log('person变化了', val);
}, { deep: true });

function ageAdd() {
    person.age++;
}

</script>