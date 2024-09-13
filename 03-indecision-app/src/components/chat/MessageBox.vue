<template>
  <div class="bg-white p-4 flex items-center">
    <input
      v-model="message"
      @keypress.enter="sendMessage"
      type="text"
      placeholder="Type your message..."
      class="flex-1 border rounded-full px-4 py-2 focus:outline-none"
    />
    <MessageSendButton @click="sendMessage" :btn-disabled="!message" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits<{
  sendMessage: [text: string];
}>();

import MessageSendButton from './MessageSendButton.vue';

const message = ref('');

const sendMessage = () => {
  if (!message.value) return;
  emits('sendMessage', message.value);
  message.value = '';
};
</script>
