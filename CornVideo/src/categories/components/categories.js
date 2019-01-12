import React, { PureComponent } from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/components/search'
import Profile from './../../widgets/components/profile'

class Categories extends PureComponent{
    state = {
        value: '' 
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.input.value, 'submited')
    }

    setInputRef = element =>{
        this.input = element
    
    }

    hamdleInputChange = event =>{
        this.setState({
            //value: event.target.value.replace(' ', '-')
            value: event.target.value
        })
    }
    
    render(){
        const filterCategories = this.props.categories.filter(catTittle => {
            const filter = catTittle.title.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
            return filter
        })
        return(
            <div className="Categories" >
                <div className="Container">
                    <div className="Search">
                    <Search
                        setRef={this.setInputRef}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.hamdleInputChange}
                        value={this.state.value}
                    />
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
                    filterCategories.map((item) => {
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