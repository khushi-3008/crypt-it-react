import React from 'react';
import validateLogin from './validateLogin';
import useLoginForm from './useLoginForm';
import './login.css';

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useLoginForm(
    submitForm,
    validateLogin
  );

  return (
    <div className='form-content-left'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          SignIn
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {/* <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div> */}
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default LoginForm;