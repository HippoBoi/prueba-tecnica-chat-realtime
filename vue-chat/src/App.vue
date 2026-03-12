<script setup lang="ts">
import { useSocket } from './composables/useSocket';
import ChatTitle from './components/ChatTitle.vue';
import ConnectionStatus from './components/ConnectionStatus.vue';
import UsernameForm from './components/UsernameForm.vue';
import MessageList from './components/MessageList.vue';
import MessageInput from './components/MessageInput.vue';

useSocket();
</script>

<template>
  <div class="app-container">
    <ChatTitle />
    <ConnectionStatus />
    <UsernameForm />
    <MessageList />
    <MessageInput />
  </div>
</template>

<style scoped>
  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
</style>
