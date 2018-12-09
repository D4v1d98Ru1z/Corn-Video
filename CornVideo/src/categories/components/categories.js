import React from 'react'

function Categories(props){
    return(
        <div>
            {
                props.categories.map((item) => {
                    <Category {...item} />
                })
            }
        </div>
    )
}

export default Categories