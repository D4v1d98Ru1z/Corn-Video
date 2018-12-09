import React from 'react'

function HomeLayout(props){
    return(
        <section>
            Hello there!
            {props.children}
        </section>
    )
}

export default HomeLayout