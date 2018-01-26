import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Users from './containers/Users';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>}/>
            <Route path='/users' component={Users}/>
            <Route path='/about' component={About}/>
        </Switch>
    </BrowserRouter>
);
