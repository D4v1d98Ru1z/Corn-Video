import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'

class Home extends Component{
    handleCloseModal = (event) =>{
        this.setState({
            modalVisible: false
        })
    }
    render(){
        return(
            <HomeLayout>
                <Related />
                <Categories categories={this.props.data.categories} />
                <ModalContainer>
                    <Modal handleClick={this.handleCloseModal} >
                        <h1>Hello from Modal</h1>
                    </Modal>
                </ModalContainer>
            </HomeLayout>
        )
    }
}

export default Home