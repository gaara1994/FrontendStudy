import { ref } from 'vue'

/**
 * 自定义计数器钩子
 * @returns 对象包含计数器状态和方法
 */
export function useSum(initialValue: number = 0) {
    const sum = ref(initialValue)

    const increment = () => {
        sum.value += 1
    }

    const decrement = () => {
        sum.value -= 1
    }

    const reset = () => {
        sum.value = initialValue
    }

    return {
        sum,
        increment,
        decrement,
        reset,
    }

}