import React, { useState } from 'react';
import './login.css';
import FormLogin from './LoginForm';
import loginSuccess from './loginSuccess.jsx';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-right'>
          {/* <img className='form-img' src='public/logo192.png' alt='spaceships' /> */}
          <h1 style={{textAlign: 'center'}} >Welcome to Crypt-it</h1>
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <loginSuccess />
        )}
      </div>
    </>
  );
};

export default Login;