import React, {Component} from 'react';
import {connect} from "react-redux";

class Login extends Component {
    render() {
        return (
            <div className="App">
                Bem vindo!
                <button onClick={this.props.login}> Login </button>
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
