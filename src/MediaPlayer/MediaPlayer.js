import React, { Component } from 'react'

class MediaPlayer extends Component {

    constructor(){
        this.player = new Audio()
        this.player.src = "https://www.w3schools.com/jsref/horse.ogg";
    }

    render() {
        //console.log("MediaPlayer :: ",this.props.song);
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
