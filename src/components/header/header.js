import React, {Component} from "react";
import { Link } from "react-router-dom";
 
class Header extends Component{
  render() {
    return (
      <div>
        <h1>This is my Header</h1>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}

export default Header;