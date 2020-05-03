// react.js --> node_module/react/react.js
// apri il file react.js cerca export default  lo mette dentro la variabile React
import React, { useState } from 'react';
import playlist from './playlist.json';
import ListGroup from './ListGroup/ListGroup'
import ListGroupItem from './ListGroupItem/ListGroupItem';
import MediaPlayer from './MediaPlayer/MediaPlayer';
import SearchBar from './SearchBar/SearchBar';

function App() {

   const [mediaState, setMediaState] = useState({
      current: playlist[0],
      stop: true,
      playing: false
   })

   const [searchResult, setSearchResult] = useState(playlist)

  
   const setMediaPlayerAndPlay = (index, playlist) => {
      
      let newIndex = (index < playlist.length) ? index : playlist.length - 1
      newIndex = (newIndex >= 0) ? newIndex : 0
      
      const newsong = playlist[newIndex]
      
      console.log("setMediaPlayerAndPlay",index <= playlist.length - 1,index,newIndex , playlist.length - 1,playlist[12])
      
      setMediaState({
         current: newsong,
         playing: true,
         stop: false
      })

   }

   const songChangeHandler = (id_song) => {
      const index = playlist.findIndex((song) => { return song.id === id_song })
      setMediaPlayerAndPlay(index, playlist)
   }

   const searchSongHandler = (parola_da_cercare) => {

      const result = playlist.filter((song) => {
         const criteria = new RegExp('^' + parola_da_cercare, 'i');
         return song.title.search(criteria) !== -1;
      })
      setSearchResult(result)
   }

   const nextPressHandler = () => {
      const index = playlist.findIndex(song => mediaState.current.id === song.id)
      setMediaPlayerAndPlay(index + 1, playlist)
   }

   const previusPressHandeler = () => {

      const index = playlist.findIndex(song => mediaState.current.id === song.id)
      setMediaPlayerAndPlay(index - 1, playlist)
   }

   const playAndPauseHandler = () => {
      const newMediaState = { ...mediaState }
      newMediaState.stop = false
      newMediaState.playing = ! mediaState.playing
      
      setMediaState(newMediaState)
      console.log("playAndPauseHandler",newMediaState.playing);
   }

   const stopPressHandler = (stop) => {

      const newMediaState = { ...mediaState }
      newMediaState.stop = true
      newMediaState.playing = false

      setMediaState(newMediaState)
   }

   const songlist = searchResult.map((song) => {
      return (
         <ListGroupItem
            key={song.id}
            header={song.title}
            content={song.note}
            right={song.time}
            id={song.id}
            active={song.id === mediaState.current.id}
            onSongChange={songChangeHandler}
         />)
   })

   return (<div className="app container">
      <h1>ciccio</h1> 
      <MediaPlayer song={mediaState.current}
         onNextPress={nextPressHandler}
         onPreviusPress={previusPressHandeler}
         onPlayAndPausePress={playAndPauseHandler}
         onStopPress={stopPressHandler}
         
         playing = {mediaState.playing}
         stop={mediaState.stop}
      />

      <SearchBar onSearch={searchSongHandler} />
      <ListGroup header="nome playlist">
         {songlist}
      </ListGroup>
   </div>);

}

export default App;