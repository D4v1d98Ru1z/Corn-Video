import React from 'react'
import './friends.css'

const Friends = (props) => (
    <div className="Friends">
       <img src={props.src} width={30}  height={30}/>
       <p>{props.name}</p> 
    </div>
)

export default Friends