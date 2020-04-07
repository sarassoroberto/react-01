// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React from 'react';
import ListGroupItem from './ListGroupItem/ListGroupItem';
import playlist from './playlist.json';

import './App.css';
// Componente App  (functional component)
function App() {

  console.log(playlist)
  const songlist = playlist.map((song)=>{
    return (
      <ListGroupItem 
        heading={song.title}
        right={song.time}
      />
    )
  })

  return (<ul className="list-group"> 
            {songlist}
          </ul>);
}

export default App;
