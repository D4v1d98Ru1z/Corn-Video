import React from 'react'
import Media from './media'
import './playlist.css'

function Playlist(props){
        const PLAYLIST = props.data.categories[0].playlist
        return(
            <div className="Playlist">
                {
                    PLAYLIST.map((item)=>{
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
        )
}

export default Playlist