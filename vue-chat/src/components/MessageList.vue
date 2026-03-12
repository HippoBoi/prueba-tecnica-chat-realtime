<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import { useChatStore } from '../stores/chatStore';
import { PROFILE_PICTURES } from '../constants/profilePictures';

const chatStore = useChatStore();
const bottomRef = ref<HTMLDivElement>();

watch(
  () => chatStore.messages.length,
  () => {
    nextTick(() => {
      bottomRef.value?.scrollIntoView({ behavior: 'smooth' });
    });
  },
);
</script>

<template>
  <div className="message-list">
    <div v-for="msg in chatStore.messages" :key="msg.id" className="message-item">
      <img
        class="message-profile-pic"
        :src="PROFILE_PICTURES[msg.profilePictureIndex ?? 0]"
        alt="profile"
      />
      <strong>{{ msg.sender }}</strong>: {{ msg.text }}
    </div>
    <div ref="bottomRef" />
  </div>
</template>

<style>
  .message-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .message-item {
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 480px;
    width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
  }
</style>