<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useChatStore } from '../stores/chatStore';

const username = ref<string>('');
const chatStore = useChatStore();
const input = ref<string>('');

function handleSubmit() {
  const trimmed = input.value.trim();
  if (!trimmed) return;
  chatStore.setUsername(trimmed);
  username.value = trimmed;
  input.value = '';
}

onMounted(() => {
  username.value = chatStore.username;
})

</script>

<template>
  <div className="form-container">
    <h3>Username: {{ username || 'unnamed' }}</h3>
    <p>Change Username</p>
    <input
      v-model="input"
      type="text"
      placeholder="Username"
      @keydown.enter="handleSubmit"
    />
    <button :disabled="!input.trim()" @click="handleSubmit">Change</button>
  </div>
</template>

<style>
  .form-container {
    position: fixed;
    top: 0;
    left: 1%;
  }

  .input-container p {
    justify-self: center;
    margin-bottom: 0.25rem;
  }

  .input-container h3 {
    justify-self: center;
    margin-bottom: 0.25rem;
  }

  .input-container input {
    margin-bottom: 2rem;
  }
</style>