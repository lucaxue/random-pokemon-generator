import React, { useState } from 'react';
import './index.css';

import PokemonViewer from '../PokemonViewer';

function App() {
  const [id, setId] = useState(5);
  function handleClick() {
    //Set id to be random number between 1 and 151
    setId(1 + Math.round(Math.random() * 150));
  }

  return (
    <div className="app">
      <h1>Random Pokemon Generator!</h1>
      {/*call handleClick when button clicked */}
      <button onClick={handleClick}>Get Random Pokemon</button>
      {/*hand down id as a prop */}
      <PokemonViewer id={id} />
    </div>
  );
}

export default App;
