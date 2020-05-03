import React, { Component } from 'react'

class MediaPlayer extends Component {
    
    playAndPauseHandler = () => {
        this.props.onPlayAndPausePress()  
    } 
    
    stopHandler = () => {
        this.props.onStopPress()
    } 

    previusHandler = () => {
        this.props.onPreviusPress()
    }

    nextHandler = () => {
        this.props.onNextPress()
    }

    render() {

        let message = '';

        if(this.props.stop){
            message =  'il pezzo è all\'inizio'
        }else{
            message = this.props.playing ? 'sto ascoltando il pezzo' : 'il pezzo è in pausa'
        }

        const song = this.props.song;
        
        return (
                <div class="card p-3">
           
                    <div class="card-body text-center">
                        <h5 class="card-title">{song.title}</h5>
                        <div class="card-text">{song.time}</div>
                                <div className="p-4">{message}</div>
                                <div class="btn-group">
                                    <button className="btn btn-outline-primary" onClick={this.previusHandler} >previus</button> 
                                    <button className="btn btn-outline-primary" onClick={this.stopHandler} >stop</button> 
                            
                                    {this.props.playing ?   <button className="btn btn-primary" onClick={this.playAndPauseHandler} >pause</button>  : 
                                                            <button className="btn btn-danger" onClick={this.playAndPauseHandler} >play</button> 
                                                            }
                                        
                            <button className="btn btn-outline-primary" onClick={this.nextHandler} >next</button> 
                            
                        </div>
                    </div>
                </div>
        )
    }
}

export default MediaPlayer
