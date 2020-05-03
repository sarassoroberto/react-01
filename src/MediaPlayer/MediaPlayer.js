import React, { Component } from 'react'

class MediaPlayer extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            playing : false,
            message: "la canzone è all'inizio 01"
        }
    }


    playHandler = () => {
        console.log("play")
        this.props.playHandler()
       
    } 
    
    pauseHandler = () => {
        console.log("pause")
        this.props.stopHandler(false)
    } 

    stopHandler = () => {
        console.log("stop")
        this.setState({
            playing:false 
        })

        this.props.stopHandler(true)
    } 



    render() {

        console.log("MediaPlayer :: ",this.props.stop);
        let message = '';
        if(this.props.stop){
            message =  'il pezzo è all\'inizio'
        }else{
            message = this.state.playing ? 'sto ascoltando il pezzo' : 'il pezzo è in pausa'
        }

        const song = this.props.song;
        
        return (
                <div class="card p-3">
                    {this.props.stop ? 'stop true':'stop false'}
                    <div class="card-body text-center">
                        <h5 class="card-title">{song.title}</h5>
                            <div className="p-2">{message}</div>
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
