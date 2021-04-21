import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Login from './components/login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard';
import Encryption from './components/Encryption/Encryption';
import Files from './components/Files/Files';
import DisplayFiles from './components/Card/View';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/encryption" exact component={Encryption} />
      <Route path="/files" exact component={Files} />
      <Route path="/cards" exact component={DisplayFiles} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

