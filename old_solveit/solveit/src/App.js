import './App.css';
import React from 'react';

import Suspects from './pages/suspects'

function App() {
  return (
    <>
    <div  styles={{ backgroundImage:`/assets/board.jpg `}}>     
    </div>
    <header>
      <img src="/assets/solve_header.png" className="App-header"></img>
    </header>
    
      <div> 
        <Suspects />
    </div>
    </>
  );
}

export default App;
