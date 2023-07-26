import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HowItWorks.scss';
import order from '../../../assets/howItWorks/order1@2x.svg'
import delivery from '../../../assets/howItWorks/delivery1@2x.svg'
import courier from '../../../assets/howItWorks/courier1@2x.svg'

import { FormattedMessage } from 'react-intl';



class HowItWorks extends Component {

    render() {

        return (
            <div id='service' className='content-section'>
                <div className='section-title'><FormattedMessage id="service.title-service" /></div>
                <div className='section-heading'><FormattedMessage id="service.header-service" /></div>
                <div className='section-sub-heading'><FormattedMessage id="service.sub-header-service" /></div>
                <div className='card-service-container'>
                    <div className='card-service'>
                        <img className='img-card' src={order}></img>
                        <div className='header-card-service'><FormattedMessage id="service.header-card-order" /></div>
                        <div className='sub-header-card-service'><FormattedMessage id="service.sub-header-card-order" /></div>
                    </div>
                    <div className='card-service'>
                        <img className='img-card' src={delivery}></img>
                        <div className='header-card-service'><FormattedMessage id="service.header-card-delivery" /></div>
                        <div className='sub-header-card-service'><FormattedMessage id="service.sub-header-card-delivery" /></div>
                    </div>
                    <div className='card-service'>
                        <img className='img-card' src={courier}></img>
                        <div className='header-card-service'><FormattedMessage id="service.header-card-quality" /></div>
                        <div className='sub-header-card-service'><FormattedMessage id="service.sub-header-card-quality" /></div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks);
