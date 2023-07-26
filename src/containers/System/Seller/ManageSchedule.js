import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManageSchedule.scss'


class ManageSchedule extends Component {

    constructor(props) {
        super(props);
        this.state = {


        }
    }

    async componentDidMount() {

    }

    render() {

        return (
            <React.Fragment>
                <div>Manage schedule</div>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
