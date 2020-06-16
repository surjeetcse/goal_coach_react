import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from 'react-router';
import { createBrowserHistory } from "history";
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import './App.css';

ReactDOM.render( 
<Router path="/" history={createBrowserHistory()}>
    <Route path="/app" component={App}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
</Router>
, document.getElementById('root'));