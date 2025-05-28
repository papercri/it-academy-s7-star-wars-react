import React from 'react';
import { createRoot } from 'react-dom/client'
import './assets/styles/global.scss'
import App from './App.tsx'

import { UserProvider } from "./context/user.context.tsx";

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

      <UserProvider>
        <App />
      </UserProvider>

  </React.StrictMode>
);
