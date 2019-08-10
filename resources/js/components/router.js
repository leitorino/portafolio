import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './index';
import About from './about';

function router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route exact path="/asd" component={About}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default router;