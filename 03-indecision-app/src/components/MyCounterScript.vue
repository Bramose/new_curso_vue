<template>
    <section>
        <h3>Counter: {{ counter  }}</h3>
        <h3>Square: {{ squareCounter }}</h3>
    </section>
    <div>
        <button @click="counter++">+1</button>
        <button @click="counter--">-1</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useCounter } from './composables/useCounter';

    export default defineComponent({
        props: {
            value: { type: Number, required: true }
        },
        setup(props) {
            const { counter, squareCounter } = useCounter(props.value);
            return {
                counter,
                squareCounter,
            }
        },
    });
</script>