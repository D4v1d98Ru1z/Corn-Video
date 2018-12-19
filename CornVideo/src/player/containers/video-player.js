import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import {formattedTime} from '../../libs/utilities'
import ProgressBar from '../components/progress-bar'

class VideoPlayer extends Component{
    state={
        pause: true,
        duration: 0,
        currentTime: 0,
        floatTime: 0,
        progress: 0,
    }
    togglePlay = (event) =>{
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event =>{
        this.video =  event.target
        this.setState({
            duration: formattedTime(this.video.duration),
            floatTime: this.video.duration
        })
    }
    handleTimeUpdate = event =>{
        this.video =  event.target
        this.setState({
            currentTime: formattedTime(this.video.currentTime),
            progress: this.video.currentTime
        })
    }
    handleProgressChange = event =>{
        this.video.currentTime = event.target.value
    }

    render(){
        return(
            <VideoPlayerLayout>
                <Title
                title="Hello from title"
                />
                <Controls>
                    <PlayPause 
                    pause={this.state.pause}
                    handleClick={this.togglePlay}
                    />
                    <Timer 
                    duration={this.state.duration}  
                    currentTime={this.state.currentTime} 
                    />
                    <ProgressBar
                    duration={this.state.floatTime}
                    value={this.state.progress}
                    handleProgressChange={this.handleProgressChange}
                    />
                </Controls>

                <Video 
                autoplay={this.props.autoplay}
                pause={this.state.pause}
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                handleLoadedMetadata={this.handleLoadedMetadata}
                handleTimeUpdate={this.handleTimeUpdate}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer