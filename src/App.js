// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React from 'react';
import Song from './song';
import playlist from './playlist.json';

import './App.css';
// Componente App  (functional component)
function App() {

  console.log(playlist)
  const songlist = playlist.map((song)=>{
    return (<p>per ogni canzone</p>)
  })

  return (<div className="app"> 
            {songlist}
             
          </div>);
}

export default App;
