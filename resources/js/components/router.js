import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './index';

function router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default router;