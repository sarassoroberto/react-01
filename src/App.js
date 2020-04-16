// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React, { useState } from 'react';
import playlist from './playlist.json';
import ListGroupItem from './ListGroupItem/ListGroupItem';
import MediaPlayer from './MediaPlayer/MediaPlayer';

// import './App.css';
// Componente App  (functional component)
function App() {

   const [mediaState,setMediaState] =  useState({
         current:playlist[0]
      })

   const songChange = (id_song) => {
      const newCurrent = playlist.find((song) => {
         return song.id === id_song 
      })

      setMediaState({
         current:newCurrent
      })

      console.log("DENTRO APP ::songChange",newCurrent);
   }


  const songlist = playlist.map((song) => {
    return  (
             <ListGroupItem 
                key={song.id}
                header={song.title}
                content={song.note}
                right={song.time}
                id={song.id}

                change = {songChange}
             />)
  })
  
   //console.log(mediaState.current.title)

  return (<div className="app container"> 
              <MediaPlayer
               song = {mediaState.current}
              >
              </MediaPlayer>  

             {songlist}
          </div>);

}

export default App;
