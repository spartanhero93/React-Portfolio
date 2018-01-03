import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route} from 'react-router-dom';
import Header from './Components/Header';
import PostIndex from './Components/post_index';
//import promise from 'redux-promise';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/home" component={Header}/>
            <Route path="/posts" component={PostIndex}/>
        </div>
    </BrowserRouter>
    ), document.getElementById("root"));
