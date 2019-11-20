import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyAX_UWuqDXk_X0xoDZ_UtcbgC3_gMVv4Z4",
    authDomain: "justalk-7820b.firebaseapp.com",
    databaseURL: "https://justalk-7820b.firebaseio.com",
    projectId: "justalk-7820b",
    storageBucket: "justalk-7820b.appspot.com",
    messagingSenderId: "255288142454",
    appId: "1:255288142454:web:e3f077f359f9ba58b00d57",
    measurementId: "G-72ZK9H498B"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

