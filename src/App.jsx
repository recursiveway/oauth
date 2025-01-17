import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <div className="p-4">
      {!isLoggedIn ? (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
          clientId="253843922361-e6tiu1snsrantg8ju0ppb98ksqt2i218.apps.googleusercontent.com"
          scope="profile" // Removed email from scope
          prompt="consent"
          render={(renderProps) => (
            <button 
              onClick={renderProps.onClick}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign in with Google
            </button>
          )}
        />
      ) : (
        <div>
          <p>Successfully logged in!</p>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-2"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;