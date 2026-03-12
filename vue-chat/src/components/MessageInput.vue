<script setup lang="ts">
import { ref } from 'vue';
import { socket } from '../services/socket';
import { useChatStore } from '../stores/chatStore';

const chatStore = useChatStore();
const text = ref('');

function handleSend() {
  const trimmed = text.value.trim();
  const sender = chatStore.username || 'noname';
  if (!trimmed || !chatStore.isConnected) return;

  const message = {
    id: crypto.randomUUID(),
    text: trimmed,
    sender,
    timestamp: Date.now(),
  };

  socket.emit('message', message);
  text.value = '';
}
</script>

<template>
  <div>
    <input
      v-model="text"
      type="text"
      placeholder="Type a message..."
      :disabled="!chatStore.isConnected"
      @keydown.enter="handleSend"
    />
    <button :disabled="!chatStore.isConnected || !text.trim()" @click="handleSend">
      Send
    </button>
  </div>
</template>
