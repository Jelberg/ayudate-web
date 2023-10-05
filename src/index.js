import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {AuthProvider} from './contexts/AuthContext.js';
import {UserProvider} from './contexts/UserContext.js';
import {FilterProvider} from './contexts/FilterContext.js';
import App from './pages/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
);
