import { useChatStore } from '../store/useChatStore';
import type { Message } from '../types/message';
import './MessageList.css';

export function MessageList() {
  const messages = useChatStore((s) => s.messages);

  return (
    <div className="message-list">
      {messages.map((msg: Message) => (
        <div key={msg.id} className="message-item">
          <strong>{msg.sender}</strong>: {msg.text}
        </div>
      ))}
    </div>
  );
}
