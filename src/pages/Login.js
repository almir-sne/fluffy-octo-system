import React, {Component} from 'react';
import {connect} from "react-redux";
import "../styles/login.scss"

class Login extends Component {
    render() {
        return (
            <div className="container-fluid login">
                <h2> Welcome! You must login to Spotify to continue</h2>
                <button className="btn btn-primary green-button" onClick={this.props.login}> Login</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: () => dispatch({type: 'OAUTH_LOGIN'}),
});

export default connect(
    () => ({}),
    mapDispatchToProps
)(Login);
