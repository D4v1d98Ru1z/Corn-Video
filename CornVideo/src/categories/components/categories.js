import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search'
import Profile from './../../widgets/components/profile'

function Categories(props){
    return(
        <div className="Categories" >
            <Search/>
            {
                props.profile.map(item => {
                    return(
                        <Profile key={item.id} {...item}/>
                    )
                })
            }
            {
                props.categories.map((item) => {
                    return (
                        <Category key={item.id} {...item} handleOpenModal={props.handleOpenModal} />
                    )
                })
            }
        </div>
    )
}

export default Categories