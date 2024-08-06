<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- <ChatBubble 
        v-for="(message, index) in messages" 
        :key="index" 
        :its-Mine="message.itsMine" 
        :message="message.message" 
        :image="message.image"
      /> -->
      <ChatBubble 
        v-for="(message, index) in messages" 
        :key="index" 
        v-bind="message"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';

interface Props {
  messages: ChatMessage[]
}
defineProps<Props>();

const messagesDiv = document.querySelector('.flex-1');

</script>