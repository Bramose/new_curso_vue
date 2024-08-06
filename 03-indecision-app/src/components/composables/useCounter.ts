import { ref, computed } from "vue";
// const counter = ref(10);
export const useCounter = (initiaValue: number = 5) => {
    const counter = ref(initiaValue);
    const squareCounter = computed(() => counter.value * counter.value);
    return {
        counter,
        squareCounter
    }
}