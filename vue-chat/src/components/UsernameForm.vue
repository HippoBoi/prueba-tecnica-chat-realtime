<script setup lang="ts">
import { ref } from 'vue';
import { useChatStore } from '../stores/chatStore';

const chatStore = useChatStore();
const input = ref('');

function handleSubmit() {
  const trimmed = input.value.trim();
  if (!trimmed) return;
  chatStore.setUsername(trimmed);
  input.value = '';
}
</script>

<template>
  <div>
    <h2>Change Username</h2>
    <input
      v-model="input"
      type="text"
      placeholder="Username"
      @keydown.enter="handleSubmit"
    />
    <button :disabled="!input.trim()" @click="handleSubmit">Change</button>
  </div>
</template>
