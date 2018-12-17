import React, { Component } from 'react'
import './video.css'
class Video extends Component{
    togglePlay(){
        if(this.props.pause){
            this.video.play()
        }
        else{
            this.video.pause()
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause){
            this.togglePlay()
        }
    }
    setRef = element =>{
        this.video = element
    }
    render(){
        return(
            <div className="Video">
                <video
                autoPlay={this.props.autoplay}
                ref={this.setRef}
                src={this.props.src}
                />
            </div>
        )
    }
}

export default Video