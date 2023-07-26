import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Menu.scss';
import ModalFood from '../ModalFood';

import { FormattedMessage } from 'react-intl';
import { FOODS } from '../../../components/Food';



class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModalUser: false,

        }
    }

    handleViewDetailFood = (food) => {
        console.log('check food', food);
        this.setState({
            isOpenModalUser: true
        })
    }
    render() {

        return (
            <div id='menu' className='content-section'>
                <ModalFood
                    isOpen={this.state.isOpenModalUser}
                    toggelFromParent={this.toggelUserModal}
                    createNewUser={this.createNewUser}
                />

                <div className='section-title'><FormattedMessage id="popular-menu.title-menu" /></div>
                <div className='section-heading'><FormattedMessage id="popular-menu.header-menu" /></div>
                <div className='section-sub-heading'><FormattedMessage id="popular-menu.sub-header-menu" /></div>
                <div className='card-product-content'>

                    <div className='card-product' onClick={() => this.handleViewDetailFood()}>
                        <div className='img-product'></div>
                        <div className='background-product'>
                            <div className='title-product'>
                                <div className='heading-product'><FormattedMessage id="popular-menu.heading-food-2" /></div>
                                <div className='sub-heading-product'><FormattedMessage id="popular-menu.sub-food-1" /></div>
                            </div>
                            <div className='last-product'>
                                <div className='price-product'><FormattedMessage id="popular-menu.price-food-1" /></div>
                                <div className='like-product like-active'><i className="fas fa-heart"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className='card-product' onClick={() => this.handleViewDetailFood()}>
                        <div className='img-product-2'></div>
                        <div className='background-product'>
                            <div className='title-product'>
                                <div className='heading-product'><FormattedMessage id="popular-menu.heading-food-2" /></div>
                                <div className='sub-heading-product'><FormattedMessage id="popular-menu.sub-food-2" /></div>
                            </div>
                            <div className='last-product'>
                                <div className='price-product'><FormattedMessage id="popular-menu.price-food-2" /></div>
                                <div className='like-product'><i className="fas fa-heart"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className='card-product' onClick={() => this.handleViewDetailFood()}>
                        <div className='img-product-3'></div>
                        <div className='background-product'>
                            <div className='title-product'>
                                <div className='heading-product'><FormattedMessage id="popular-menu.heading-food-3" /></div>
                                <div className='sub-heading-product'><FormattedMessage id="popular-menu.sub-food-3" /></div>
                            </div>
                            <div className='last-product'>
                                <div className='price-product'><FormattedMessage id="popular-menu.price-food-3" /></div>
                                <div className='like-product'><i className="fas fa-heart"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className='card-product' onClick={() => this.handleViewDetailFood()}>
                        <div className='img-product-4'></div>
                        <div className='background-product'>
                            <div className='title-product'>
                                <div className='heading-product'><FormattedMessage id="popular-menu.heading-food-4" /></div>
                                <div className='sub-heading-product'><FormattedMessage id="popular-menu.sub-food-4" /></div>
                            </div>
                            <div className='last-product'>
                                <div className='price-product'><FormattedMessage id="popular-menu.price-food-4" /></div>
                                <div className='like-product'><i className="fas fa-heart"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='btn-menu btn' onClick={() => this.handleViewMoreMenu()}><FormattedMessage id="popular-menu.btn-more-menu" /></div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
