<template>
    <div>
        <p>Sum:{{ sum }}</p>
        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>
        <button @click="reset">reset</button>

        <hr>
        <ul>
            <li v-for="(dog, index) in dogList" :key="index">
                {{ dog }}
            </li>
        </ul>
        <button @click="getDog('Rex')">Add Rex</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDog } from '@/hooks/useDog';
import { useSum } from '@/hooks/useSum';

let { sum, increment, decrement, reset, } = useSum(0);
let { dogList, getDog } = useDog();
</script>