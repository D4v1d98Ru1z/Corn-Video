import React, {Component} from 'react';
import './media.css'

class Media extends Component{
    render(){
        return(
            <div className="Media">
                <div>
                    <img className="Media-image" src={this.props.image} width={260} height={160} />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-year">{this.props.year}</p>
                </div>
            </div>
        )
    }    
}

export default Media