import React, { useState } from 'react';
import './Form.css';
import FormSignup from './Registration';
import { Redirect } from 'react-router';

const Form = () => {
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
          <h1 className='h1register'>Welcome to Crypt-it</h1>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Redirect to="/login"/>
        )}
      </div>
    </>
  );
};

export default Form;