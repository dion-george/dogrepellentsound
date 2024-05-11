import React from 'react';
import './App.css';
import SoundToggleButton from './SoundToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog Repellent Sound</h1>
        <img src="./dog-around-man.webp" alt="Repellent" style={{ maxWidth: '300px', maxHeight: '300px' }} />
        <p>Please use this sound responsibly and only in times of distress to repel street dogs.</p>
        <SoundToggleButton />
      </header>
    </div>
  );
}

export default App;
