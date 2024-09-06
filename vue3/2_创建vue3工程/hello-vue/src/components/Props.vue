<template>
    <div class="prop">
        <h2>{{ car }}</h2>
        <h2>{{ list }}</h2>

        <ul>
            <li v-for="p in list" :key="p.id">{{ p }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { type PersonList } from "@/types";

// 接受父组件传过来的值
// defineProps(['car', 'list']);

// 接受父组件传过来的值+类型限制
// defineProps<{ list: PersonList; car: string }>();

// 接受父组件传过来的值+类型限制+默认值+校验
withDefaults(defineProps<{ list?: PersonList, car?: string }>(), {
    list: () => [{ id: 1, name: "zs" }, { id: 2, name: "ls" }],
    car: () => "奔驰",
})
</script>
