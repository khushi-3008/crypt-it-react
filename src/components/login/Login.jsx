import React, { useState } from 'react';
import './login.css';
import FormLogin from './LoginForm';
import LoginSuccess from './LoginSuccess';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <LoginSuccess />
        )}
        <div className='form-content-right'>
          {/* <img className='form-img' src='public/logo192.png' alt='spaceships' /> */}
          <h1 className='h1login' >Welcome to Crypt-it</h1>
        </div>
      </div>
    </>
  );
};

export default Login;