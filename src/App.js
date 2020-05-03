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

   const [mediaState, setMediaState] = useState({
      current: playlist[0],
      stop: true
   })

   const [searchResult, setSearchResult] = useState(playlist)


   const setMediaPlayerAndPlay = (index, playlist) => {

      let newIndex
      newIndex = (index < playlist.length) ? index : playlist.length - 1
      newIndex = (index >= 0) ? index : playlist.length

      const newsong = playlist[index]

      setMediaState({
         current: newsong,
         playing: true,
         stop: true
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

   const stopPressHandler = (stop) => {
      setMediaState({
         current: mediaState.current,
         stop: stop
      })
   }

   const songlist = searchResult.map((song) => {
      // console.log("ACTIVE --> ",song.id===mediaState.current.id,song.id,mediaState.current.id)
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

   console.log(mediaState.current.title, mediaState.stop)

   return (<div className="app container">

      <MediaPlayer song={mediaState.current}
         stop={mediaState.stop}
         onNextPress={nextPressHandler}
         onPreviusPress={previusPressHandeler}
         onStopPress={stopPressHandler}
      />

      <SearchBar onSearch={searchSongHandler} />
      <ListGroup header="nome playlist">
         {songlist}
      </ListGroup>
   </div>);

}

export default App;
