import React, {Component} from 'react';
import './media.css'

class Media extends Component{
    render(){
        return(
            <div className="Media">
                <div>
                    <img className="Media-image" src="./images/series/titans.jpg" width={260} height={160} />
                    <h3 className="Media-title">Titans</h3>
                    <p className="Media-year">2018</p>
                </div>
            </div>
        )
    }
}

export default Media