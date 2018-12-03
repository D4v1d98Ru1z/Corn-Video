import React, {Component} from 'react';
import './media.css'
import PropTypes from 'prop-types'

class Media extends Component{
    render(){
        const {title, year, image} = this.props
        return(
            <div className="Media" onClick={this.handleClick}>
                <div>
                    <img className="Media-image" src={poster} width={260} height={160} />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-year">{year}</p>
                </div>
            </div>
        )
    }    
}

Media.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    poster: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media