<script setup lang="ts">
import { useChatStore } from '../stores/chatStore';

const chatStore = useChatStore();
</script>

<template>
  <div>
    <div v-for="msg in chatStore.messages" :key="msg.id">
      <strong>{{ msg.sender }}</strong>: {{ msg.text }}
    </div>
  </div>
</template>
