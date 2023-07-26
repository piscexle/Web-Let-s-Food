import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HowItWorks from './Section/HowItWorks';
import Menu from './Section/Menu';
import AboutUs from './Section/AboutUs';
import Discount from './Section/Discount';
import ContactUs from './Section/ContactUs';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <HowItWorks />
                <Menu />
                <AboutUs />
                <Discount />
                <ContactUs />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
