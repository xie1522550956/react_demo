import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let title = ['1','2','3','4']
  return (
    <div className="App">
      <ul>
        { 
          title.map((v,i)=> <li key={i}>{v}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
