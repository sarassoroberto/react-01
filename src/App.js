// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React from 'react';
import Song from './song';
import playlist from './playlist.json';

// import './App.css';
// Componente App  (functional component)
function App() {

  const songlist = playlist.map((song) => {
    console.log("song in map",song);
    return  (<Song titolocanzone={song.title}></Song>)
  })
  
  return (<div className="app container"> 
            
             {songlist}
          </div>);

}

export default App;
