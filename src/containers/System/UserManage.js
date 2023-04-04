import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attributes: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('All')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
        console.log('get user from node.js', response)
    }

    /** Work Front framework :Life cycle
     * Run component:
     *  1.Run constuct -> init state
     * 2. Did mount (set state) luu tru cac gia tri
     * 3. Render
     * */

    render() {
        console.log('check render', this.state)
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <div className='title text-center'>Manage users</div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    console.log('thor check map', item, index)
                                    return (
                                        <div className='divClass'>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                        </div>
                                    )
                                })
                            }

                        </tr>

                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
