import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Wrapper from './components/Wrapper';
import {isAuthenticated} from './services/auth.js';




const PrivateRoute = ({component:Component, ...rest}) => (
    <Route 
        {...rest}
        render = {props => (
            isAuthenticated() ? (
                <Component {...props}/>
            ) : 
            (
                'tela nao redenrizada'
            )
        )}
    /> 
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute path="/app" component={Wrapper}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;