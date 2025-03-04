import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import {Provider} from "react-redux";
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';



const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <StrictMode>
    <App />
  </StrictMode>
  </Provider>
 
)
