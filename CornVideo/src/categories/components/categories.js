import React, { PureComponent } from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search'
import Profile from './../../widgets/components/profile'

class Categories extends PureComponent{
    render(){
        return(
            <div className="Categories" >
                <div className="Container">
                    <div className="Search">
                        <Search/>
                    </div>
                    <div className="Prof">
                        {
                            this.props.profile.map(item => {
                                return(
                                    <Profile key={item.id} {...item}/>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    this.props.categories.map((item) => {
                        return (
                            <Category key={item.id} {...item} handleOpenModal={this.props.handleOpenModal} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Categories