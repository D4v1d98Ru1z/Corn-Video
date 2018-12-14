import React, { Component } from 'react'
import Search from '../components/search'

class SearchContainer extends Component{
    handleSubmit = event => {
        event.preventDefault()
        console.log('submited')
    }
    render(){
        return(
            <Search
            handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SearchContainer