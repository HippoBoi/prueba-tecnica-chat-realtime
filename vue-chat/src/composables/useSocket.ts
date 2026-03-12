import { onMounted, onUnmounted } from 'vue';
import { socket } from '../services/socket';
import { useChatStore } from '../stores/chatStore';
import type { Message } from '../types/message';

export function useSocket() {
  const chatStore = useChatStore();

  onMounted(() => {
    socket.connect();

    socket.on('connect', () => {
      chatStore.setConnected(true);
    });

    socket.on('disconnect', () => {
      chatStore.setConnected(false);
    });

    socket.on('message', (msg: Message) => {
      chatStore.addMessage(msg);
    });
  });

  onUnmounted(() => {
    socket.off('connect');
    socket.off('disconnect');
    socket.off('message');
    socket.disconnect();
  });
}
