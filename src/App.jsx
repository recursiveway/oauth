import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoogleOAuthButton from './GoogleOAuthButton'
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
   </>
  )
}

export default App
