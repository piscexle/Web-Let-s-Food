import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { reject } from 'lodash';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils'
import * as actions from '../../../store/actions';
import './UserRedux.scss'
import TableManageUser from './TableManageUser';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            role: '',
            avatar: '',

            action: '',
            userEditId: ''
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getRoleStart()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''
            })
        }
        if (prevProps.listUsers !== this.props.listUsers) {
            let arrRoles = this.props.roleRedux
            let arrGenders = this.props.genderRedux

            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE

            })
        }
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return

        let { action } = this.state
        if (action === CRUD_ACTIONS.CREATE) {
            //fire redux create user
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                avatar: this.state.avatar
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            //fire redux edit user
            this.props.editUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                avatar: this.state.avatar
            })
        }
    }

    checkValidateInput = () => {
        let isValid = true
        let arrCheck = ['email', 'password', 'firstName', 'lastName',
            'phoneNumber', 'address']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i])
                break
            }
        }
        return isValid
    }


    onChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }

    handleOnChangeImage = async (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            console.log(base64)
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64
            })
        }
    }

    handleEditUserFromParent = (user) => {
        this.setState({
            email: user.email,
            password: 'HARDCODE',
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
            gender: user.gender,
            role: user.roleId,
            avatar: user.avatar,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id
        })
    }

    render() {
        let genders = this.state.genderArr
        let roles = this.state.roleArr
        let language = this.props.language
        let isLoadingGender = this.props.isLoadingGender

        let { email, password, firstName, lastName,
            phoneNumber, address, gender, role, avatar
        } = this.state;


        return (
            <div className='user-redux-container'>
                <div className='title'>User Redux</div>
                <div className="user-redux-body" >
                    <div className='container'>
                        <div className='row'>
                            <form className="row g-3">
                                <div className="col-12 my-3">
                                    <FormattedMessage id="manage-user.add" />
                                </div>
                                <div className='col-12'>{isLoadingGender === true ? 'Loading genders' : ``}</div>

                                <div className="col-md-3">
                                    <label htmlFor="inputEmail4" className="form-label"><FormattedMessage id="manage-user.email" /></label>
                                    <input type="email" className="form-control" id="inputEmail4"
                                        value={email}
                                        onChange={(event) => { this.onChangeInput(event, 'email') }}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label"><FormattedMessage id="manage-user.password" /></label>
                                    <input type="password" className="form-control" id="inputPassword4"
                                        value={password}
                                        onChange={(event) => { this.onChangeInput(event, 'password') }}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}

                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputFirstName" className="form-label"><FormattedMessage id="manage-user.first-name" /></label>
                                    <input type="text" className="form-control" id="inputFirstName"
                                        value={firstName}
                                        onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputLastName" className="form-label"><FormattedMessage id="manage-user.last-name" /></label>
                                    <input type="text" className="form-control" id="inputLastName"
                                        value={lastName}
                                        onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPhoneNumber" className="form-label"><FormattedMessage id="manage-user.phone-number" /></label>
                                    <input type="text" className="form-control" id="inputPhoneNumber"
                                        value={phoneNumber}
                                        onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                                    />
                                </div>
                                <div className="col-md-9">
                                    <label htmlFor="inputAddress" className="form-label"><FormattedMessage id="manage-user.address" /></label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St,Apartment, studio, or floor"
                                        value={address}
                                        onChange={(event) => { this.onChangeInput(event, 'address') }}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputGender" className="form-label"><FormattedMessage id="manage-user.gender" /></label>
                                    <select id="inputGender" className="form-select"
                                        onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                        value={gender}
                                    >
                                        {genders && genders.length > 0 &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.key}>{language === LANGUAGES.EN ? item.valueEn : item.valueVi}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="inputRole" className="form-label"><FormattedMessage id="manage-user.role" /></label>
                                    <select id="inputRole" className="form-select"
                                        onChange={(event) => { this.onChangeInput(event, 'role') }}
                                        value={role}
                                    >
                                        {roles && roles.length > 0 &&
                                            roles.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.key}>{language === LANGUAGES.EN ? item.valueEn : item.valueVi}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputImage" className="form-label"><FormattedMessage id="manage-user.image" /></label>
                                    <div className='preview-img-container'>
                                        <input type="file" className="form-control" id="previewImg" hidden
                                            onChange={(event) => this.handleOnChangeImage(event)}
                                        />
                                        <label className='label-upload' htmlFor='previewImg'>Tải ảnh <i className='fas fa-upload'></i></label>
                                        <div className='preview-image'
                                            style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        ></div>
                                    </div>

                                </div>
                                <div className="col-12 mt-5">
                                    <button
                                        type="button"
                                        className='btn btn-primary'
                                        onClick={() => this.handleSaveUser()}
                                    >
                                        {this.state.action === CRUD_ACTIONS.EDIT ?
                                            <FormattedMessage id="manage-user.edit" />
                                            :
                                            <FormattedMessage id="manage-user.save" />
                                        }

                                    </button>
                                </div>

                                <div className='col-12 mb-5'>
                                    <TableManageUser
                                        handleEditUserFromParent={this.handleEditUserFromParent}
                                        action={this.state.action}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        editUserRedux: (data) => dispatch(actions.editUser(data))
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);