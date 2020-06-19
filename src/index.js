import React from 'react';
import ReactDOM from 'react-dom';
import AppClass from './AppClass';
import AppFunction from './AppFunction';
import Login from './Login';
import Register from './Register';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Register />,
    //<Login />,
    // <AppClass />,
    // <AppFunction />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
