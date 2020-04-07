// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React from 'react';
import Song from './song';
import playlist from './playlist.json';

import './App.css';
// Componente App  (functional component)
function App() {

  console.log(playlist)
  const songlist = playlist.map()

  return (<div className="app"> 
            
             
          </div>);
}

export default App;
