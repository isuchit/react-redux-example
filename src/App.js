import React from 'react';
import { Counter } from './features/counter/Counter';
import Login  from './features/login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
      </header>
    </div>
  );
}

export default App;
