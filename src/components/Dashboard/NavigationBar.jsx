import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
const obrackets ="<";
const cbrackets =">";
const Styles = styled.div`
  .form-center {
    position: absolute;
    left: 25%;
    right: 25%;
    margin-top: -20px;
  }
`;
export const NavigationBar = () => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand style={{fontSize: '100px' } , {marginLeft: -7}}>Crypt-it</Navbar.Brand>
    <Styles>
      <Form className="form-center">
          <FormControl type="text" placeholder="Search" className="" />
      </Form>
    </Styles>

    
  </Navbar>
)