import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button} from "react-bootstrap"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
