import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
        </Switch>
    </BrowserRouter>
);
