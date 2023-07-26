import React, { Component } from 'react';
import { connect } from "react-redux";

class DetailFood extends Component {
    render() {

        return (
            <div>Detail food
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailFood);
