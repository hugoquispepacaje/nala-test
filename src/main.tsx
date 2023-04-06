import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/cssReset.css';
import './style/app.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
