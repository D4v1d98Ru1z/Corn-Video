import React, { Component } from 'react'
import BasicError from '../component/basic-error'
class HandleError extends Component{
    state = {
        handleError: false
    }
    componentDidCatch(error, info){
        this.setState({
            handleError: true
        })
    }
    render(){ 
        if(this.state.handleError){
            return(
                <BasicError/>
            )
        }
        return this.props.children       
    }
}

export default HandleError