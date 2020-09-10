import React from 'react';
import './App.css';

/* Local imports */
import Title from './components/Title';
import DadJoke from './components/DadJoke';
import Bikes from './components/Bikes';

const App = () => {
  return (
    <div className="App">
      <Title />
      <DadJoke />
      <Bikes />
    </div>
  );
};

export default App;
