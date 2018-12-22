import React from 'react'
import VolumeButton from '../../icons/components/volume'
import './volume.css'

function Volume(props){
    return(
        <button 
        className="Volume"
        >       
            <div  onClick={props.handleClickMute}>
                <VolumeButton 
                    size={25}
                    color="white"
                />

            </div>
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    onChange={props.handleChangeVolume}
                    value={props.value}
                />
            </div>
        </button>
    )
}

export default Volume