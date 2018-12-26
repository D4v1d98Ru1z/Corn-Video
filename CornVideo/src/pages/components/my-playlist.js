import React from 'react'
import './my-playlist.css'

function myPlaylist(props) {
    const { playlist } = props
    return(
        <div className="MyPlaylist">
            <p>{playlist}</p>
        </div>
    )
}

export default myPlaylist