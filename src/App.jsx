import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });
  const handleLoginSuccess = (credentialResponse) => {
    // Only store the necessary information, avoiding email
    if (credentialResponse?.credential) {
      setIsLoggedIn(true);
      // You can store the credential token securely if needed
      // but avoid logging or displaying it
      console.log('Login successful');
    }
  };

  const handleLoginError = () => {
    setIsLoggedIn(false);
    console.log('Login Failed');
  };

  return (
    <GoogleLogin
    onSuccess={(credentialResponse) => {
      console.log(credentialResponse);
    }}
    onError={() => {
      console.error("Login Failed");
    }}
    auto_select={false}
    className="full-frame"
  />
  );
}

export default App;