
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutUs.scss';
import user1 from '../../../assets/about/user1.svg'
import user2 from '../../../assets/about/user2.svg'

import { FormattedMessage } from 'react-intl';



class AboutUs extends Component {

    render() {

        return (
            <div id="about" className="content-about card">
                <div className="row g-0 justify-content-center">
                    <div className="img-about col-md-7 img-fluid rounded-start"></div>
                    <div className="col-md-5 ms-5">
                        <div className="card-body">
                            <h5 className="section-title card-title"><FormattedMessage id="about-us.about-title" /></h5>
                            <p className="section-heading card-text"><FormattedMessage id="about-us.about-heading" /></p>
                        </div>
                        <div className='row'><div className="col">
                            <div className="col-sm-12 mb-3 mb-sm-0">
                                <div className="card">
                                    <div className="row g-0 ps-3 pe-3 pt-3 align-items-center">
                                        <div className="col-md-2">
                                            <img src={user1} className="img-fluid rounded-start" alt="..."></img>
                                        </div>
                                        <div className="col-md-10"><h5 className="card-title ms-3">Naura Silvana</h5></div>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="col" >
                                <div className="col-sm-12 mb-3 mb-sm-0">
                                    <div className="card"  >
                                        <div className="row g-0 ps-3 pe-3 pt-3 align-items-center">
                                            <div className="col-md-2">
                                                <img src={user2} className="img-fluid rounded-start" alt="..."></img>
                                            </div>
                                            <div className="col-md-10"><h5 className="card-title ms-3">Azura</h5></div>
                                        </div>

                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div></div>


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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);