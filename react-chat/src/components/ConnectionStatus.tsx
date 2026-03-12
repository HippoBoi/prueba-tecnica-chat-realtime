import { useChatStore } from '../store/useChatStore';
import './ConnectionStatus.css';

export function ConnectionStatus() {
  const isConnected = useChatStore((s) => s.isConnected);

  return (
    <p>{isConnected ? '🟢 Connected' : '🔴 Disconnected'}</p>
  );
}
