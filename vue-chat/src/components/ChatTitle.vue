<script setup lang="ts">
  const vueLogo = new URL('../assets/vue.svg', import.meta.url).href;
</script>

<template>
  <div className="title-container">
    <h1>Chat Realtime, Vue Edition</h1>
    <img className="vue-logo" :src="vueLogo" alt="Vue logo" />
  </div>
</template>

<style>
  h1 {
    margin-bottom: 0;
  }

  .title-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .vue-logo {
    margin-top: 1.25rem;
    margin-left: 10px;
    align-self: center;
  }
</style>