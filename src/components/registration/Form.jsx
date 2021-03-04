import React, { useState } from 'react';
import './Form.css';
import FormSignup from './Registration';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          {/* <img className='form-img' src='public/logo192.png' alt='spaceships' /> */}
          <h1 style={{textAlign: 'center'}} >Welcome, Crypt-it</h1>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;