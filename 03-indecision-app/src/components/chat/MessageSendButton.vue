<template>
    <button
        v-if="!btnDisabled"
        class="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none"
        
    >
        <SendMessageIcon/>
    </button>
    <button
        v-else
        class="bg-blue-300 text-white rounded-full p-2 ml-2 focus:outline-none"
        disabled="true"
    >
        <SendMessageIcon/>
    </button>

</template>
<script setup lang="ts">

interface Props {
    btnDisabled: boolean
}

defineProps<Props>();

import SendMessageIcon from '../icon/SendMessageIcon.vue';
</script>