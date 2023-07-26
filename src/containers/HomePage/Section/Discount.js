import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Discount.scss';

import { FormattedMessage } from 'react-intl';



class Discount extends Component {

    render() {

        return (
            <div className='discount-container'>
                <div className='heading-discount'><FormattedMessage id="discount.heading-discount" /></div>
                <a href="/" className='btn-discount btn'>
                    <div className='icon-signup'></div>
                    <FormattedMessage id="discount.btn" />
                </a>

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

export default connect(mapStateToProps, mapDispatchToProps)(Discount);
