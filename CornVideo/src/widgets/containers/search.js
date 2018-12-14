import React, { Component } from 'react'
import Search from '../components/search'

class SearchContainer extends Component{
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.input.value, 'submited')
    }

    setRef = element =>{
        this.input = element
    }

    render(){
        return(
            <Search
            setRef={this.setRef}
            handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SearchContainer