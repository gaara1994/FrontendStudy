<script setup lang="ts">
import { ref, reactive } from "vue";
//ref存储普通数据
const age = ref(18);
age.value = 20;

//ref存储对象数据
const obj = ref({
    name: "张三",
    age: 18,
    sex: "男",
});
//修改对象的属性
obj.value.name = "李四";
obj.value.age = 35;

//替换整个对象
obj.value = {
    name: "iphone13",
    price: 9999,
    color: "red",
    brand: "apple",
};

//reactive存储引用数据类型
const car = reactive({
    name: "宝马",
    price: 5999,
    color: "black",
})
// 直接访问和修改对象的属性
car.price = 6999;
</script>

<template>
    <div>
        <h1>Ref</h1>
        <br>
        <h1>ref存储引用普通类型</h1>
        <h1>{{ age }}</h1>
        <hr>
        <h1>ref存储引用数据类型</h1>
        <h1>{{ obj.name }}</h1>
        <h1>{{ obj.age }}</h1>
        <h1>{{ obj.sex }}</h1>
        <hr>
        <h1>Reactive</h1>
        <h1>{{ car.name }}</h1>
        <h1>{{ car.price }}</h1>
        <h1>{{ car.color }}</h1>

    </div>
</template>
