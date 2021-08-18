import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login'
import Historic from '../Historic/historic'
import Home from '../main/main'
import About from '../about/about'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login} />
            <Route exact path='/' component={Home} />
            <Route path="/historic" component={Historic}/>
            <Route path="/about" component={About}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;