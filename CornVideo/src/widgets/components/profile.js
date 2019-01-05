import React from 'react'
import Arrow from './../../icons/components/arrow'
import './profile.css'

function Profile(props){
    return(
        <div className="Profile">
            <div className="Profile-ico">
                <Arrow  size={20}/>
            </div>
            <img src={props.src} width={45} height={45}/>
            <p>{props.name}</p>
        </div>
    )
} 

export default Profile