import React from 'react'
import './basic-error.css'

function BasicError(props){
    return(
        <div className="BasicError">
            <div className="BasicError-left">
                <h1>Oops!</h1>
                <h2>We can't find what you're looking for</h2>
            </div>
            <div className="BasicError-Container">
                <div className="BasicError-Right"></div> 
            </div>
        </div>
    )
}

export default BasicError