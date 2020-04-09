// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React from 'react';
import Song from './song';
import playlist from './playlist.json';
import ListGroupItem from './ListGroupItem/ListGroupItem';

// import './App.css';
// Componente App  (functional component)
function App() {

  const songlist = playlist.map((song) => {
    return  (
             <ListGroupItem 
                key={song.id}
                
                header={song.title}
                content={song.note}
                right={song.time}
             />)
  })
  
  return (<div className="app container"> 
            
             {songlist}
          </div>);

}

export default App;
