import React, { Component } from 'react'

// Class component

class MediaPlayer extends Component {

    constructor(props){
        super(props)
    }

    render() {
        console.log("MediaPlayer :: ",this.props.song);
        const song = this.props.song;
        return (<p>
                {song.title}
                <br/>
                {song.time}
            </p>
            )
    }
}

export default MediaPlayer
