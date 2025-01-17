import { GoogleLogin } from '@react-oauth/google';

function App() {
  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
        clientId="253843922361-e6tiu1snsrantg8ju0ppb98ksqt2i218.apps.googleusercontent.com" // Replace with your actual client ID
        scope="profile email" 
        prompt="consent" // Request explicit user consent
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>
            Sign in with Google
          </button>
        )}
      />
    </>
  );
}

export default App;