// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React, { useState } from 'react';
import playlist from './playlist.json';
import ListGroup from './ListGroup/ListGroup'
import ListGroupItem from './ListGroupItem/ListGroupItem';
import MediaPlayer from './MediaPlayer/MediaPlayer';
import SearchBar from './SearchBar/SearchBar';
// import './App.css';
// Componente App  (functional component)
function App() {

   const [mediaState,setMediaState] =  useState({
         current:playlist[0],
         autoplay:false
      })

   const [searchResult,setSearchResult] =  useState(playlist)

   const songChange = (id_song) => {
      const newCurrent = playlist.find((song) => {
         return song.id === id_song 
      })

      setMediaState({
         current:newCurrent,
         autoplay: true
      })

      console.log("DENTRO APP ::songChange",newCurrent);
   }

   const searchSong = (parola_da_cercare) => {
      //console.log("APP",titolo,playlist);

      const result = playlist.filter((song)=>{
            // come cerco una parola dentro una stringa in js
            const criteria = new RegExp('^'+parola_da_cercare,'i'); 
            return song.title.search(criteria) !== -1;     
      })
      

      //console.log(risultato)
      setSearchResult(result)
      // console.log(risultato)

   }

   const onNextPress = () => {
      const index = playlist.findIndex( song => mediaState.current.id === song.id)
      //console.log("app::onNextPress",playlist[index+1])
      setMediaState({
         current:playlist[index+1],
         autoplay: true
      })
   }

   const onPreviusPress = () => {
      const index = playlist.findIndex( song => mediaState.current.id === song.id)
      //console.log("app::onNextPress",playlist[index+1])
      setMediaState({
         current:playlist[index-1],
         autoplay: true
      })
   }


   
   const songlist = searchResult.map((song) => {
                  // console.log("ACTIVE --> ",song.id===mediaState.current.id,song.id,mediaState.current.id)
                  return  (
                           <ListGroupItem 
                              key={song.id}
                              header={song.title}
                              content={song.note}
                              right={song.time}
                              id={song.id}
                              active={song.id===mediaState.current.id}
                              change = {songChange}
                             
                           />)
  })

  //console.log(mediaState.current.title)

  return (<div className="app container"> 

               <MediaPlayer song = {mediaState.current}
                            onNextPress = {onNextPress}
                            onPreviusPress = {onPreviusPress}
                            autoplay={mediaState.autoplay}
               />

               <SearchBar onSearch={searchSong} />
               <ListGroup header="nome playlist"> 
                  {songlist}  
               </ListGroup>    
          </div>);

}

export default App;
