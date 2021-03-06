import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/container/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component{
    state = {
        modalVisible: false
    }

    handleOpenModal = media =>{
        this.setState({
            modalVisible: true,
            media
        })
    }

    handleCloseModal = (event) =>{
        this.setState({
            modalVisible: false
        })
    }
    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related 
                        myPlaylist={this.props.data.myPlaylist} 
                        avatar={this.props.data.avatar}
                    />
                    <Categories 
                        categories={this.props.data.categories} 
                        handleOpenModal={this.handleOpenModal}
                        profile={this.props.data.profile}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                                <Modal handleClick={this.handleCloseModal} >
                                    <VideoPlayer
                                        autoplay
                                        src={this.state.media.src}
                                        title={this.state.media.title}
                                    />
                                </Modal>
                            </ModalContainer>

                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home