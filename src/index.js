import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store ,{ persistedStore } from "./store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="http://ec2-13-127-236-214.ap-south-1.compute.amazonaws.com">
  <Provider store={store}>
    {/* <PersistGate persistor={persistedStore}> */}
    <GoogleOAuthProvider clientId='1092107067426-ru4r1hr167uib2tdd10g2v62j4cpu5fh.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
    {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
