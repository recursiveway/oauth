import React, { useEffect } from 'react';

const GoogleOAuthButton = () => {
  const clientId = '253843922361-e6tiu1snsrantg8ju0ppb98ksqt2i218.apps.googleusercontent.com';

  useEffect(() => {
    // Load the Google API script
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return script;
    };

    const script = loadGoogleScript();

    // Initialize Google OAuth
    window.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse
        });

        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button'),
          { theme: 'outline', size: 'large' }
        );
      }
    };

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response) => {
    // Handle the JWT credential
    console.log('Encoded JWT ID token: ' + response.credential);
    // Here you would typically:
    // 1. Send this token to your backend
    // 2. Verify the token
    // 3. Create a session or login the user
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div 
        id="google-signin-button"
        className="shadow-md rounded-lg"
      ></div>
    </div>
  );
};

export default GoogleOAuthButton;