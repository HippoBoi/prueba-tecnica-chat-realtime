import { useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import './UsernameForm.css';

export function UsernameForm() {
  const username = useChatStore((s) => s.username);
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
    <div className='form-container input-container'>
      <h3>Username: { username || 'unnamed' }</h3>
      <p>Change Username</p>
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
