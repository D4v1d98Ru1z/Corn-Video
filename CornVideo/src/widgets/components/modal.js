import React from 'react'
import './modal.css'

function Modal(props){
    return(
        <div className="Modal">
            this is a modal
            {props.children}
        </div>
    )
}

export default Modal