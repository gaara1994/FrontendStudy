import { ref } from 'vue'

/**
 * 自定义狗列表钩子
 * @returns 对象包含狗列表状态和方法
 */

export function useDog() {
    const dogList = ref<string[]>([]);

    const getDog = (name: string) => {
        dogList.value.push(name);
    }

    return { dogList, getDog }
}