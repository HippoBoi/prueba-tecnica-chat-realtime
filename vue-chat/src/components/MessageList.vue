<script setup lang="ts">
import { useChatStore } from '../stores/chatStore';

const chatStore = useChatStore();
</script>

<template>
  <div className="message-list">
    <div v-for="msg in chatStore.messages" :key="msg.id" className="message-item">
      <strong>{{ msg.sender }}</strong>: {{ msg.text }}
    </div>
  </div>
</template>

<style>
  .message-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .message-item {
    max-width: 480px;
    width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
  }
</style>