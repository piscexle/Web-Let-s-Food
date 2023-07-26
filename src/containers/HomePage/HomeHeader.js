import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils"
import { Redirect } from 'react-router-dom';
import * as actions from "../../store/actions";


import { changeLanguageApp, processLogin } from '../../store/actions';
class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event : actions
    }

    render() {
        const { language } = this.props;


        return (
            <React.Fragment>
                <div className='main'>
                    <div className='home-header-container'>
                        <div className='home-header-content'>
                            <div className='logo-content'>
                                <a href='/' className='header-logo'></a>
                            </div>
                            <div className='center-content'>
                                <a href="/" className='child-content action'>
                                    <FormattedMessage id="home-header.home" />
                                </a>
                                <a href="#menu" className='child-content'>
                                    <FormattedMessage id="home-header.menu" />
                                </a>
                                <a href="#service" className='child-content'>
                                    <FormattedMessage id="home-header.howItWorks" />
                                </a>
                                <a href="#about" className='child-content'>
                                    <FormattedMessage id="home-header.about" />
                                </a>
                                <a href="#contact" className='child-content'>
                                    <FormattedMessage id="home-header.contact" />
                                </a>
                            </div>
                            <div className='icon-content'>
                                <div className='search-header'><i className="fas fa-search"></i></div>
                                <div className='cart-header' onClick={() => this.handleCart()}>
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className='cart-header-notice'>2</span>
                                </div>
                                <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                                <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                            </div>
                            <div className='signin'>
                                <div className='btn-signin btn'>
                                    <div className='icon-signin'></div>
                                    <div className='title-signin'><FormattedMessage id="home-header.signin" /></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='home-header-slider'>
                        <div className='header-slider-content'>
                            <div className='header-slider'><FormattedMessage id="slider.header-slider" />

                                <div className='sub-header-slider'><FormattedMessage id="slider.sub-header-slider" /></div>
                                <a href='#service' className='btn-slider btn'>
                                    <span className='btn-title'><FormattedMessage id="slider.btn-slider" /></span>
                                </a>
                            </div>
                            <div className='img-slider'></div>
                        </div>
                    </div>

                    <div id='content'>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
