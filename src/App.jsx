import { GoogleLogin } from '@react-oauth/google';

function App() {
  const [count, setCount] = useState(0);

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
        useOneTap
        theme="filled_blue"
      />
    </>
  );
}

export default App;
