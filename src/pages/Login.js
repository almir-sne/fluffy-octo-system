import React, {Component} from 'react';
import {connect} from "react-redux";
import "../styles/login.css"

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div> Welcome! You must login to Spotify to continue</div>
                <div>
                    <button className="btn btn-primary" onClick={this.props.login}> Login</button>
                </div>
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
