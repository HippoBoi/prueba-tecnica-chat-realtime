import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Message } from '../types/message';

export const useChatStore = defineStore(
  'chat',
  () => {
    const messages = ref<Message[]>([]);
    const isConnected = ref(false);
    const username = ref('');
    const profilePictureIndex = ref(0);

    function addMessage(message: Message) {
      messages.value.push(message);
    }

    function setConnected(connected: boolean) {
      isConnected.value = connected;
    }

    function setUsername(name: string) {
      username.value = name;
    }

    function setProfilePictureIndex(index: number) {
      profilePictureIndex.value = index;
    }

    return { messages, isConnected, username, profilePictureIndex, addMessage, setConnected, setUsername, setProfilePictureIndex };
  },
  {
    persist: {
      pick: ['messages', 'username', 'profilePictureIndex'],
    },
  },
);
