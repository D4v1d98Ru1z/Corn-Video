import React from 'react'

function Categories(props){
    return(
        <div>
            {
                this.props.categories.map((item) => {
                    <Category {...item} />
                })
            }
        </div>
    )
}

export default Categories