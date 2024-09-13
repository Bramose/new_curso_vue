<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- <ChatBubble 
        v-for="(message, index) in messages" 
        :key="index" 
        :its-Mine="message.itsMine" 
        :message="message.message" 
        :image="message.image"
      /> -->
      <ChatBubble v-for="(message, index) in messages" :key="index" v-bind="message" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';
import { sleep } from '../helpers/sleep';

interface Props {
  messages: ChatMessage[];
}
const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(props, async () => {
  await sleep(0.1);
  chatRef.value?.scrollTo({
    top: chatRef.value.scrollHeight,
    behavior: 'smooth',
  });
});
</script>
