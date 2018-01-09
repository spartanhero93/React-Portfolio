import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route} from 'react-router-dom';
import App from './App';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
        </div>
    </BrowserRouter>
    ), document.getElementById("root"));