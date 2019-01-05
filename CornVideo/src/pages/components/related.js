import React from 'react'
import Logo from '../../../images/logo.png'
import './related.css'
import MyPlaylist from './my-playlist'
import Friends from './friends'

function Related(props){
    return(
        <div className="Related" >
            <img src={Logo} width={250} />
            <div className="Related-Playlist">
                <h3>My Playlist</h3>
                <div>
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
            </div>
            <div className="Related-Playlist">
                <h3>My Friends</h3>
                <div>
                    {
                        props.avatar.map(item => {
                            return(
                                <Friends 
                                    key={item.id} 
                                    {...item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Related