import React, { Component } from 'react'

// Class component

class MediaPlayer extends Component {


    render() {
        console.log("MediaPlayer :: ",this.props.song);
        const song = this.props.song;

        return (
                <div class="card p-3">
                    <div class="card-body text-center">
                        <h5 class="card-title">{song.title}</h5>
                        <p class="card-text">{song.time}</p>
                    </div>
                </div>
        )
    }
}



export default MediaPlayer
