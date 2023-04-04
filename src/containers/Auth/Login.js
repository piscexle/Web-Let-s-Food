import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })

        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('login message')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            console.log('hoidanit', error.response)
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        //JSX


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 logo-login'>
                            <span className='title-logo'>Let’sFood</span>
                            <div className='group-logo'>
                                <div className='vector-1'></div>
                                <div className='vector-2'></div>
                                <div className='vector-3'></div>
                                <div className='vector-4'></div>
                                <div className='vector-5'></div>
                                <div className='vector-6'></div>
                            </div>
                        </div>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label className='title-input'>Username:</label>
                            <input type='text'
                                placeholder='Enter your username'
                                className='form-control'
                                value={this.state.username}
                                onChange={(event) => this.handleOnchangeUsername(event)}
                            ></input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label className='title-input'>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    className='form-control'
                                    onChange={(event) => this.handleOnchangePassword(event)}
                                ></input>
                                <span
                                    onClick={() => this.handleShowHidePassword()}
                                ><i class={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i></span>
                            </div>
                        </div>

                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}

                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => this.handleLogin()}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className='fab fa-google-plus-g google'></i>
                            <i className='fab fa-facebook-f facebook'></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);