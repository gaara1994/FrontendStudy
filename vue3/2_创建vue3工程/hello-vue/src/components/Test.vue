<template>
    <!-- <div>
        <h1>这是Test组件</h1>
        <h1>{{ name }}</h1>
        <h1>{{ age }}</h1>
        <button @click="addOne">增加年龄</button>
    </div> -->

    <div>
        <h1>这是Test组件</h1>
        <h1>{{ phone.brand }}</h1>
        <h1>{{ phone.price }}</h1>
        <h1>{{ phone.color }}</h1>
        <button @click="priceAdd">增加价格</button>
    </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { reactive } from "vue";
// let name = "张三";
// let age = ref(20);
// console.log(age); // ref 对象  
// console.log(age.value); // ref.value 获取值  

// const addOne = () => {
//     age.value++;
//     console.log(age); // ref 对象  
//     console.log(age.value); // ref.value 获取值  
// };

let phone = reactive({
    brand: "iphone",
    price: 6,
    color: "red",
});

console.log(phone); // reactive 对象  
console.log("---------------------");
console.log(phone.price); // reactive 对象的属性值  

const priceAdd = () => {
    phone.price++;
    console.log(phone.price); // reactive 对象的属性值  
};
</script>