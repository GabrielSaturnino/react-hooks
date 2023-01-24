import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleSpinClick = () => {
    event.preventDefault();
    setReverse(!reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button">
          <a
            className="App-link"
            onClick={handleSpinClick}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reverse xD
          </a>
        </button>
      </header>
    </div>
  );
}

export default App;
