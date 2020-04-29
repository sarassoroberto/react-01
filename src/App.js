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

  /** EVENT HANDLER */

  const songSelected = (id) => {
         console.log("songSelected",id)
         const newsong = playlist.find((item)=>{
                           return item.id === id
                           })

         console.log("song",newsong)
         
         
         setPlayer({
            currentMedia:newsong
         })
  }

  /** RENDER */       
  const songlist = playlist.map((song) => {
                  return  (
                           <ListGroupItem 
                              key={song.id}
                              id={song.id}
                              header={song.title}
                              content={song.note}
                              right={song.time}
                              listItemSelected={songSelected}
                           />)
  })
  


  return (<div className="app container"> 
            <h1>Faccio una modifica</h1>
            
            <MediaPlayer 
               media = {player.currentMedia}
            />
             {songlist}
          </div>);

}

export default App;
