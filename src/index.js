import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import App from './App';
import Login from './components/login/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

