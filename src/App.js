// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React, { useState } from 'react';
import playlist from './playlist.json';
import ListGroupItem from './ListGroupItem/ListGroupItem';
import MediaPlayer from './MediaPlayer/MediaPlayer';
// import './App.css';
// Componente App  (functional component)
function App() {

  
   const [player,setPlayer] =  useState({
            currentMedia:playlist[0]
         })

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
            <MediaPlayer 
               media = {player.currentMedia}
            />
             {songlist}
          </div>);

}

export default App;
