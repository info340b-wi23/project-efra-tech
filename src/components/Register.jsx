import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const Register = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const changeEmail = (event) => {
    setInputEmail(event.target.value);
  }

  const changePassword = (event) => {
    setInputPassword(event.target.value);
  }

  return (
    <>
      <div className="register">
        <h1>Register page</h1>
        <label>
          Email:
          <input type='inputEmail' value={inputEmail} onChange={changeEmail} />
        </label>
        <label>
          Password:
          <input type='inputPassword' value={inputPassword} onChange={changePassword} />
        </label>
        <button onClick={changeEmail}>Sign Up</button>
        <Link to='/login'>Log in here if you already have an account.</Link>
      </div>
    </>
  );
}

export default Register;