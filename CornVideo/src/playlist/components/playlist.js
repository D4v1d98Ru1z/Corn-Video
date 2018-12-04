import React from 'react'
import Media from './media'
import './playlist.css'
import Play from '../../icons/components/play'
function Playlist(props){
        const PLAYLIST = props.data.categories[0].playlist
        return(
            <div className="Playlist">
                <Play size={50} color="blue"/>
                {
                    PLAYLIST.map((item)=>{
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
        )
}

export default Playlist