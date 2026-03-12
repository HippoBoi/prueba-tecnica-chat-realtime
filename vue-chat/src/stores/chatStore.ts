import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Message } from '../types/message';

export const useChatStore = defineStore(
  'chat',
  () => {
    const messages = ref<Message[]>([]);
    const isConnected = ref(false);
    const username = ref('');

    function addMessage(message: Message) {
      messages.value.push(message);
    }

    function setConnected(connected: boolean) {
      isConnected.value = connected;
    }

    function setUsername(name: string) {
      username.value = name;
    }

    return { messages, isConnected, username, addMessage, setConnected, setUsername };
  },
  {
    persist: {
      pick: ['messages', 'username'],
    },
  },
);
