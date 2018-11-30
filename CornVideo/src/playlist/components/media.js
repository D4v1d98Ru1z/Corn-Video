import React, {Component} from 'react';
import './media.css'

class Media extends Component{
    render(){
        return(
            <div className="Media">
                <div>
                    <img src="./images/covers/bitcoin.jpg" width={260} height={160} />
                    <h3>This is my first component</h3>
                    <p>By: David Ruiz</p>
                </div>
            </div>
        )
    }
}

export default Media