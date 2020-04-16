import React,{Component} from 'react'

class MediaPlayer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (<div className="card media-player">
                <img className="card-img-top" src={this.props.poster} 
                     alt="Card image cap"/>
                    <div className="card-body text-center">
                        <i className="fa fa-play"></i>
                        
                        <h5 className="card-title">{this.props.media.title}</h5>
                        <p className="card-text">{this.props.media.time}</p>
                    </div>
                </div>
                )
    }
}

export default MediaPlayer

