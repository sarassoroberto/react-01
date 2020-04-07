// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React,{useState} from 'react';
import ListGroupItem from './ListGroupItem/ListGroupItem';
import Card from './Card/Card';
import playlist from './playlist.json';

import './App.css';
// Componente App  (functional component)
function App() {

  const [currentSong,setCurrentSong] = useState(false);
  const playSong = (e) => {
   console.log(e);
  }

  const songlist = playlist.map((song)=>{
    return (
    
      <ListGroupItem 
        key={song.id}
        heading={song.title}
        right={song.time}
        content={song.note}
        
      />
    )
  })

  return (<>
          {
            currentSong ? <Card></Card> : false
          }
          <ul className="list-group"> 
            {songlist}
          </ul>
          </>
          );
}

export default App;
