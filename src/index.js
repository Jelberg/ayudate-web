import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {IconContext} from 'react-icons';

import {UserProvider} from './contexts/UserContext.js';

import App from './pages/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
);
