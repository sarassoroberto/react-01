import React, { Component } from 'react'

class MediaPlayer extends Component {
    
    constructor(props){
        super(props)
        this.player = new Audio()
        this.player.src = "https://www.w3schools.com/jsref/horse.ogg";

        this.player.ontimeupdate  = this.ontimeupdate
        this.player.onended  = () => this.setState({playing:false})
        this.player.onended  = () => this.setState({playing:false})
        this.player.onpause = () => this.setState({playing:false})

        this.state = {
            currentTime:"00:00",
            playing : false
        }
    }

    ontimeupdate = (e) => {
        //console.log(this.player.currentTime)
        this.setState({currentTime:this.player.currentTime,playing:true})
    }

    playHandler = () => {
        console.log("play")
        this.player.play()
        
    } 
    
    pauseHandler = () => {
        console.log("pause")
        this.player.pause()
    } 



    render() {
        //console.log("MediaPlayer :: ",this.props.song);
        const song = this.props.song;
        
        return (
                <div class="card p-3">
                    <div class="card-body text-center">
                        <h5 class="card-title">{song.title}</h5>
                            <p class="card-text">{this.state.currentTime}/{song.time}</p>
                        <div>
                           <button className="btn" onClick={() => {this.props.onPreviusPress()}} >previus</button> 
                         
                           {this.state.playing ?  <button className="btn btn-danger" onClick={this.pauseHandler} >pause</button>  : 
                                                  <button className="btn btn-primary" onClick={this.playHandler} >play</button> 
                                                  }
                            
                           <button className="btn" onClick={() => {this.props.onNextPress()}} >next</button> 
                        </div>
                    </div>
                </div>
        )
    }
}



export default MediaPlayer
