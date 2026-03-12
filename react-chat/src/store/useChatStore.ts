import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Message } from '../types/message';

interface ChatState {
  messages: Message[];
  isConnected: boolean;
  username: string;
  profilePictureIndex: number;
  addMessage: (message: Message) => void;
  setConnected: (connected: boolean) => void;
  setUsername: (username: string) => void;
  setProfilePictureIndex: (index: number) => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      isConnected: false,
      username: '',
      profilePictureIndex: 0,
      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages, message],
        })),
      setConnected: (connected) => set({ isConnected: connected }),
      setUsername: (username) => set({ username }),
      setProfilePictureIndex: (index) => set({ profilePictureIndex: index }),
    }),
    {
      name: 'chat-storage',
      partialize: (state) => ({
        messages: state.messages,
        username: state.username,
        profilePictureIndex: state.profilePictureIndex,
      }),
    }
  )
);
