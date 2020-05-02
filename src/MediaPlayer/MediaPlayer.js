import React, { Component } from 'react'

class MediaPlayer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            playing : false
        }
    }


    playHandler = () => {
        console.log("play")
        this.setState({
            playing:true,
            stop:false,
            message:"ascolto la canzone"
        })
        
    } 
    
    pauseHandler = () => {
        console.log("pause")
        this.setState({
            playing:false,
            stop:false,
            message:"la canzone e in pausa"
        })
    } 

    stopHandler = () => {
        console.log("stop")
        this.setState({
            playing:false,
            stop:true,
            message:"la canzone è all'inizio"
        })
    } 



    render() {
        //console.log("MediaPlayer :: ",this.props.song);
        const song = this.props.song;
        
        return (
                <div class="card p-3">
                    {this.state.stop ? 'stop true':'stop false'}
                    <div class="card-body text-center">
                        <h5 class="card-title">{song.title}</h5>
                            <div className="p-2">{this.state.message}</div>
                        <div>
                           <button className="btn" onClick={() => {this.props.onPreviusPress()}} >previus</button> 
                           <button className="btn" onClick={this.stopHandler} >stop</button> 
                         
                           {this.state.playing ?  <button className="btn btn-danger btn-sm" onClick={this.pauseHandler} >pause</button>  : 
                                                  <button className="btn btn-primary btn-sm" onClick={this.playHandler} >play</button> 
                                                  }
                            
                           <button className="btn" onClick={() => {this.props.onNextPress()}} >next</button> 
                        </div>
                    </div>
                </div>
        )
    }
}



export default MediaPlayer
