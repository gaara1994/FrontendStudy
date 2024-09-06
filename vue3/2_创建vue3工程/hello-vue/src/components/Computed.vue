<script setup lang="ts">
import { ref, computed } from 'vue'
//声明基础数据
const Income = ref(10)//收入
const Expense = ref(20)//支出
//计算属性
const Total = computed(() => {
    return Income.value - Expense.value
})

const decreaseIncome = () => {
    Income.value -= 1
}

const increaseIncome = () => {
    Income.value += 1
}

const decreaseExpense = () => {
    Expense.value -= 1
}
const increaseExpense = () => {
    Expense.value += 1
}

</script>

<template>
    <h1>计算属性</h1>
    <div>
        <button @click="decreaseIncome">-</button>
        <span>收入：{{ Income }}</span>
        <button @click="increaseIncome">+</button>
    </div>
    <div>
        <button @click="decreaseExpense">-</button>
        <span>支出：{{ Expense }}</span>
        <button @click="increaseExpense">+</button>
    </div>
    <div>盈亏：{{ Total }}</div>


</template>
