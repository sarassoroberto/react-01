import React,{Component} from 'react'

class MediaPlayer extends Component {

    render() {
        return (<div class="card media-player">
                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                    <div class="card-body">
                        <h5 class="card-title">{this.props.media.title}</h5>
                        <p class="card-text">{this.props.media.time}</p>
                    </div>
                </div>)
    }
}

export default MediaPlayer

