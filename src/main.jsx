import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import AuthProvider from './auth';
import ModalProvider from './modal';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </AuthProvider>
  </StrictMode>,
)
