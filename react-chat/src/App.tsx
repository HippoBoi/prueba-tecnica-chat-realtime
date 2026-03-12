import { useSocket } from './hooks/useSocket';
import { ConnectionStatus } from './components/ConnectionStatus';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { UsernameForm } from './components/UsernameForm';

import './App.css';
import { Title } from './components/Title';

function App() {
  useSocket();

  return (
    <div className="app-container">
      <Title />
      <ConnectionStatus />
      <UsernameForm />
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default App;
