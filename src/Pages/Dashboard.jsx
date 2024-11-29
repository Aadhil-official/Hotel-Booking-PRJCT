// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import FacebookLogin from 'react-facebook-login';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   // Handle Google Login
//   const handleGoogleLogin = async (credentialResponse) => {
//     const { credential } = credentialResponse;
//     try {
//       const response = await axios.post('http://localhost:9191/api/auth/google', {
//         idToken: credential,
//       });
//       if (response.status === 200) {
//         navigate('/bookroom');
//       }
//     } catch (error) {
//       console.error('Google Login failed', error.response ? error.response.data : error.message);
//     }
//   };

//   // Handle Facebook Login
//   const responseFacebook = async (response) => {
//     if (response.status !== 'unknown') {
//       try {
//         const res = await axios.post('http://localhost:9191/api/auth/facebook', {
//           accessToken: response.accessToken,
//         });
//         if (res.status === 200) {
//           navigate('/bookroom');
//         }
//       } catch (error) {
//         console.error('Facebook Login failed', error.response ? error.response.data : error.message);
//       }
//     } else {
//       console.log('Facebook Login failed');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '50px' }}>
//       <h1>Dashboard</h1>
//       <GoogleLogin
//         onSuccess={handleGoogleLogin}
//         onError={() => console.log('Google Login Failed')}
//       />
//       <FacebookLogin
//         appId="513032288229207"
//         autoLoad={false}
//         fields="name,email,picture"
//         callback={responseFacebook}
//         onError={() => console.log('Facebook Login Failed')}
//       />
//     </div>
//   );
// };

// export default Dashboard;

// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:9191/oauth2/authorization/google';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'http://localhost:9191/oauth2/authorization/facebook';
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Dashboard</h1>
      <Box mt={2}>
        <Button
          variant='contained'
          color='primary'
          onClick={handleGoogleLogin}
          style={{ margin: '10px' }}
        >
          Login with Google
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleFacebookLogin}
          style={{ margin: '10px' }}
        >
          Login with Facebook
        </Button>
      </Box>
    </div>
  );
};

export default Dashboard;
