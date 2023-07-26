import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils"
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
//import './ModalFood.scss'

class ModalFood extends Component {

    constructor(props) {
        super(props) //ke thua tu cha
        this.state = {

        }


    }

    componentDidMount() {

    }

    toggle = () => {
        this.props.toggelFromParent()
    }
    handleOnChangeInput = (event, id) => {
        //bad code
        // this.state[id] = event.target.value
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad state:', this.state)
        // })

        //good code
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }

    checkValideInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing parameter: ', arrInput[i])
                break
            }
        }
        return isValid
    }


    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className='modal-food-container'
                size='lg'
            >
                <ModalHeader toggle={() => { this.toggle() }}></ModalHeader>
                <ModalBody>
                    <div className='modal-food-body'>
                        <div className='img-1'></div>
                        <div className='content-food'>
                            <div className='header-name'>Mie Ramen</div>
                            <div className='render-food'>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <div className='reviewer'>9 review</div>
                            </div>
                            <div className='price-food'>30.000 VND</div>
                            <div className='des-food'>Loream hdjshdh asdhsahdasjhdjas</div>
                            <Button color="primary" >
                                Add to cart
                            </Button>
                        </div>

                    </div>

                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.user.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalFood);


