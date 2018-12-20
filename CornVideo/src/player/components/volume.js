import React from 'react'
import VolumeButton from '../../icons/components/volume'
import './volume.css'

function Volume(props){
    return(
        <button className="Volume">
            <VolumeButton 
                size={25}
                color="white"
            />
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    onChange={props.handleChangeVolume}
                />
            </div>
        </button>
    )
}

export default Volume