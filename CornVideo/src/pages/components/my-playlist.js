import React from 'react'

function myPlaylist(props) {
    const { playlist } = props
    return(
        <div>
            <p>{playlist}</p>
        </div>
    )
}

export default myPlaylist