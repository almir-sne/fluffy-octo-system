import React, {Component} from 'react';
import {connect} from "react-redux";
import {parse} from "query-string";
import {Redirect} from "react-router-dom";

class Callback extends Component {
    componentDidMount() {
        let {access_token} = parse(this.props.location.hash);
        this.props.loginCallback(access_token);
    }

    render() {
        return (
            <Redirect to='/search'/>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loginCallback: (accessToken) => dispatch({type: 'OAUTH_LOGIN_SUCCESS', accessToken}),
});

export default connect(
    () => ({}),
    mapDispatchToProps
)(Callback);