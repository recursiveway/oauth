import React, { useEffect, useState } from 'react';

const GoogleOAuthButton = () => {
  const clientId = '253843922361-e6tiu1snsrantg8ju0ppb98ksqt2i218.apps.googleusercontent.com';
  const [scriptLoaded, setScriptLoaded] = useState(false);//

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setScriptLoaded(true);
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse
        });

        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button'),
          { 
            theme: 'outline', 
            size: 'large',
            width: '100%',
            text: 'continue_with',
            shape: 'rectangular',
          }
        );
      }
    };

    script.onerror = () => {
      console.error('Failed to load Google OAuth script');
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleCredentialResponse = async (response) => {
    try {
      // Handle the JWT credential
      console.log('Encoded JWT ID token: ' + response.credential);
      
      // Example of sending to backend - replace with your actual API call
      // const result = await fetch('/api/auth/google', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ credential: response.credential }),
      // });
      
      // if (result.ok) {
      //   const data = await result.json();
      //   // Handle successful login
      //   // e.g., update app state, redirect user, etc.
      // }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div 
        id="google-signin-button"
        className="shadow-md rounded-lg w-full"
      ></div>
    </div>
  );
};

export default GoogleOAuthButton;