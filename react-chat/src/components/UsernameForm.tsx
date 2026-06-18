import { useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import './UsernameForm.css';

const MAX_USERNAME_LENGTH = 12;

export function UsernameForm() {
  const username = useChatStore((s) => s.username);
  const setUsername = useChatStore((s) => s.setUsername);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    const trimmed = input.trim();
    if (!trimmed || trimmed.length > MAX_USERNAME_LENGTH) return;
    setUsername(trimmed);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const trimmedInput = input.trim();
  const isUsernameTooLong = trimmedInput.length > MAX_USERNAME_LENGTH;
  const canSubmit = Boolean(trimmedInput) && !isUsernameTooLong;

  return (
    <div className='form-container input-container'>
      <h3>Username: { username || 'unnamed' }</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Username"
        maxLength={MAX_USERNAME_LENGTH}
        aria-invalid={isUsernameTooLong}
      />
      <button onClick={handleSubmit} disabled={!canSubmit}>
        Change
      </button>
    </div>
  );
}
