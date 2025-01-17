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