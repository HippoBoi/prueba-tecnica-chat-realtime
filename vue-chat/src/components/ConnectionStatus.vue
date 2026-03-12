<script setup lang="ts">
import { useChatStore } from '../stores/chatStore';

const chatStore = useChatStore();
</script>

<template>
  <p>{{ chatStore.isConnected ? '🟢 Connected' : '🔴 Disconnected' }}</p>
</template>
