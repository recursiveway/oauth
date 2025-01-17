import React, { useEffect } from 'react';

const GoogleOAuthButton = () => {
  const clientId = '253843922361-e6tiu1snsrantg8ju0ppb98ksqt2i218.apps.googleusercontent.com';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.google) {
        // Initialize Google Sign-In
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
          ux_mode: 'popup', // Forces popup mode
          auto_select: false, // Disable automatic email selection
          prompt: 'none', // Completely disables prompt UI
        });

        // Render the button
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

        // Explicitly disable "One Tap"
        window.google.accounts.id.disableAutoSelect();
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

  const handleCredentialResponse = (response) => {
    console.log('Encoded JWT ID token: ' + response.credential);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        width: '1000px',
      }}
    >
      <div
        id="google-signin-button"
        style={{
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          width: '100%',
        }}
      ></div>
    </div>
  );
};

export default GoogleOAuthButton;
