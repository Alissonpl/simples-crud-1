import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Produto from './pages/Produto';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/produto" component={Produto}/>
            </Switch>
        
        </BrowserRouter>

    );

}