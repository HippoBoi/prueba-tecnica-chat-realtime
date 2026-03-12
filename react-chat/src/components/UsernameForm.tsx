import { useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import './UsernameForm.css';

export function UsernameForm() {
  const setUsername = useChatStore((s) => s.setUsername);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setUsername(trimmed);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className='input-container'>
      <h2>Change Username</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Username"
      />
      <button onClick={handleSubmit} disabled={!input.trim()}>
        Change
      </button>
    </div>
  );
}
