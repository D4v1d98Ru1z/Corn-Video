import React, { Component } from 'react'
import Search from '../components/search'

class SearchContainer extends Component{
    state = {
        value: 'Titan' 
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
            value: event.target.value.replace(' ', '-')
        })
    }

    render(){
        return(
            <Search
            setRef={this.setInputRef}
            handleSubmit={this.handleSubmit}
            handleChange={this.hamdleInputChange}
            value={this.state.value}
            />
        )
    }
}

export default SearchContainer