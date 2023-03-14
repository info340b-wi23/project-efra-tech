import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';
import { Link } from 'react-router-dom';
import Register from './components/Register';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import {
  getAuth, 
  connectAuthEmulator, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDWtOB1MPwlz3f801ANOFN-YHTuuOV_zCE",
  authDomain: "ourfamily-dd31a.firebaseapp.com",
  projectId: "ourfamily-dd31a",
  storageBucket: "ourfamily-dd31a.appspot.com",
  messagingSenderId: "901039374069",
  appId: "1:901039374069:web:e03589b1b3fb6817d04fbc"
};

const auth = getAuth(App);
connectAuthEmulator(auth, 'http://localhost:3000');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const checkAuth = async () => {
  //I don't know how to pass the password and email value over, just wrote this here for now.
  const inputEmail = txtEmail.value;
  const inputPassword = txtPassword.value;
  const credentials = await signInWithEmailAndPassword(auth, inputEmail, inputPassword);
  console.log(credentials.user);
}

loginButton.addEventListener('click', checkAuth);

const makeAccount = async () => {
  const inputEmail = document.getElementById('txtEmail').value;
  const inputPassword = document.getElementById('txtPassword').value;
  const credentials = await createUserWithEmailAndPassword(auth, inputEmail, inputPassword);
  console.log(credentials.user);
}

signUpButton.addEventListener('click', makeAccount);

const authState = async () => {
  onAuthStateChanged(auth, user => {
    if(user) {
      <Link to={'/components/Home'}></Link>
    }
  });
}

authState();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Register />
  </>
);