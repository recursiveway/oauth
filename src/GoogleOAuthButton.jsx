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
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
          ux_mode: 'popup', // Open in a popup to avoid embedded email detection
          auto_select: false, // Ensures no automatic email detection occurs
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

        // Prevents Google from showing the One Tap prompt
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

  const handleCredentialResponse = async (response) => {
    try {
      console.log('Encoded JWT ID token: ' + response.credential);
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
