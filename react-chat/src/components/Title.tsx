
import './Title.css';
import reactLogo from '../assets/react.svg';

export function Title() {
  return (
    <div className='title-container'>
      <h1>Testeo Chat</h1>
      <img src={reactLogo} alt="React" className="react-logo" />
    </div>
  );
}
