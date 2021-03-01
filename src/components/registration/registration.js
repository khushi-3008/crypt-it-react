import React, {Component} from "react";
import { Link } from "react-router-dom";
import Header, {  } from "../header/header";

class Registration extends Component{
  render() {
    return (
      <div>
        <Header />
        <h1>This is my Registration</h1>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}

export default Registration;