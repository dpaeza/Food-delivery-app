import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterDom from './router/routes';
import "./reset.css"
import "./styles.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterDom />
  </React.StrictMode>
);


