import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;