import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCajI4b4Ti1t9gs--Ew3yQwIcBLbpq8FxY',
  authDomain: 'mern-photo-sharing.firebaseapp.com',
  projectId: 'mern-photo-sharing',
  storageBucket: 'mern-photo-sharing.appspot.com',
  messagingSenderId: '698465192822',
  appId: '1:698465192822:web:dc206d8f56934a2dcd8857'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
