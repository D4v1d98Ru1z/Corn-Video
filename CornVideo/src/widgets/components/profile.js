import React from 'react'
import Arrow from './../../icons/components/arrow'
function Profile(props){
    return(
        <div>
            <Arrow size={20}/>
            <img src={props.src} width={25} height={25}/>
            <p>{props.name}</p>
        </div>
    )
} 

export default Profile