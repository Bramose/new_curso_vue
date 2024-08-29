import { useCounter } from "@/components/composables/useCounter";

describe('useCounter', () => {
    test('initializas counter with privided default value', () => {
        const defaultValue = 5;
        const { counter, squareCounter } = useCounter();
        expect(counter.value).toBe(defaultValue);
        expect(squareCounter.value).toBe(defaultValue * defaultValue);
    })
    test('initializas counter with privided initial value', () => {
        const initialValue = 10;
        const { counter, squareCounter } = useCounter(initialValue);
        expect(counter.value).toBe(initialValue);
        expect(squareCounter.value).toBe(initialValue * initialValue);
    })
    test('increments counter correctly', () => {
        const { counter, squareCounter } = useCounter();

        counter.value++;

        expect(counter.value).toBe(6);
        expect(squareCounter.value).toBe(36);
    })
})