import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import App from './App';
// import Registration from "./components/registration/Registration";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact component={App} />
      {/* <Route path="/registration" exact component={Registration} /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

