<script setup lang="ts">
import { useChatStore } from '../stores/chatStore';
import { PROFILE_PICTURES } from '../constants/profilePictures';

const chatStore = useChatStore();
</script>

<template>
  <div class="profile-picker">
    <p>Profile Picture</p>
    <div class="profile-picker-options">
      <button
        v-for="(pic, index) in PROFILE_PICTURES"
        :key="index"
        :class="['profile-picker-option', { selected: index === chatStore.profilePictureIndex }]"
        @click="chatStore.setProfilePictureIndex(index)"
      >
        <img :src="pic" :alt="`Profile ${index}`" />
      </button>
    </div>
  </div>
</template>

<style>
  .profile-picker {
    position: fixed;
    top: 20%;
    left: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .profile-picker-options {
    display: flex;
    gap: 0.5rem;
  }

  .profile-picker-option {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    padding: 0;
    background: none;
    overflow: hidden;
  }

  .profile-picker-option.selected {
    border-color: #646cff;
    box-shadow: 0 0 6px rgba(100, 108, 255, 0.5);
  }

  .profile-picker-option img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .message-profile-pic {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
</style>
