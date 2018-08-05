import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './pages/Login'
import Search from './pages/Search'
import Callback from './pages/Callback'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/search' component={Search}/>
                <Route exact path='/callback' component={Callback}/>
            </Switch>
        );
    }
}

export default Routes;