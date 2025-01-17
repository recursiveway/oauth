import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  
  
  <StrictMode>
    <GoogleOAuthProvider clientId="253843922361-e6tiu1snsrantg8ju0ppb98ksqt2i218.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>;
  </StrictMode>
)
