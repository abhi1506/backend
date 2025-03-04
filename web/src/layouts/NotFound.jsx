
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh" 
      textAlign="center"
      sx={{
        background: 'linear-gradient(to right, #4e9dff, #a0c4ff)',
        animation: `${fadeIn} 1s ease-out`, 
        padding: 3,
        borderRadius: 2,
      }}
    >
      <SentimentDissatisfiedIcon fontSize="large" color="primary" sx={{ fontSize: '80px' }} />
      <Typography variant="h2" component="h1" color="primary" sx={{ fontWeight: 600 }}>
        404
      </Typography>
      <Typography variant="h4" color="text.primary" mt={2} sx={{ fontWeight: 400 }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate('/')}
        sx={{ 
          marginTop: '20px', 
          background: 'linear-gradient(to right, #ff5c8d, #ff8e41)', 
          borderRadius: '30px', 
          padding: '12px 30px', 
          fontSize: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          '&:hover': {
            background: 'linear-gradient(to right, #ff8e41, #ff5c8d)', 
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
          }
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;

