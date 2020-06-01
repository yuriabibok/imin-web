import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from './services/api';

async function getGames(): Promise<any> {
  const result = await api.games.upcoming();

  console.log(result);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {getGames()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
