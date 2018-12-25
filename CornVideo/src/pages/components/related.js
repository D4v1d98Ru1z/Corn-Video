import React from 'react'
import Logo from '../../../images/logo.png'
import './related.css'
import MyPlaylist from './my-playlist'

function Related(props){
    return(
        <div className="Related" >
            <img src={Logo} width={250} />
            <h5>My Playlist</h5>
            {
                props.myPlaylist.map(item => {
                    return(
                        <MyPlaylist 
                            key={item.id} 
                            {...item}
                        />
                    )
                })
            }
        </div>
    )
}

export default Related