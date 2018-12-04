import React from 'react'
import Media from './media'
import './playlist.css'
import Play from '../../icons/components/play'
import Volume from '../../icons/components/volume'
import Pause from '../../icons/components/pause'

function Playlist(props){
        const PLAYLIST = props.data.categories[0].playlist
        return(
            <div className="Playlist">
                <Play size={20} color="#1F1C21"/>
                <Volume size={20} color="#1F1C21" />
                <Pause size={20} color="#1F1C21" />
                {
                    PLAYLIST.map((item)=>{
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
        )
}

export default Playlist