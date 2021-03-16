import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const obrackets ="<";
const cbrackets =">";
const Styles = styled.div`
  .navbar { background-color: rgb(40, 40, 40); }
  a, .navbar-nav, .navbar-light .nav-link {
    color: rgb(39, 176, 255);
    &:hover { color: white; }
  }
  
  .navbar-brand {
    font-size: 1.4em;
    color: rgb(39, 176, 255);
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
    
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">{obrackets} </Navbar.Brand>
      <Navbar.Brand href="/">{cbrackets} </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={{fontWeight: 'bolder'}} ><Nav.Link href="/">X</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)