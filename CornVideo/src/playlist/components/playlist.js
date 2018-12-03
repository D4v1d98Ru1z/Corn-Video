import React, { Component } from 'react'
import Media from './media'

class Playlist extends Component{
    render(){
        const PLAYLIST = this.props.data.categories[0].playlist
        console.log(this.props.data)
        return(
            <div>
                {
                    PLAYLIST.map((item)=>{
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
        )
    }
}

export default Playlist