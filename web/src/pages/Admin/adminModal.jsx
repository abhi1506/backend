import React, { useContext, useState } from 'react';
import { Modal, Box, Typography, Button, TextField, Avatar, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../../theme';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import AdminSignupModal from './signup';
import { useDispatch } from 'react-redux';
import { login } from "../../redux/admin/slice/authSlice";

const AdminModal = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const dispatch = useDispatch();
  const context = useContext(MyContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();

    try {
      const action = await dispatch(login({ username, password }));
      if (login.fulfilled.match(action)) {
        const { token, user } = action.payload;
        localStorage.setItem('user', JSON.stringify(user));
        context.setIsLogin(true);
        localStorage.setItem('token', token);
        navigate('/');
        onClose();
      } else {
        setError(action.payload || 'Login failed.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const modalStyles = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 420,
    bgcolor: colors.primary[900],
    borderRadius: 3,
    boxShadow: 10,
    p: 4,
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="admin-modal-title"
      aria-describedby="admin-modal-description"
    >
      <Box sx={modalStyles}>
        {/* Avatar & Title */}
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Avatar 
            src="https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg"
            sx={{ width: 80, height: 80, boxShadow: 3 }}
          />
          <Typography variant="h5" fontWeight="bold" color={colors.primary[100]}>
            Admin Login
          </Typography>
        </Box>

        {/* Login Form */}
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ display: 'flex', flexDirection: 'column', width: '100%', mt: 3 }}
        >
          <TextField
            name="username"
            variant="outlined"
            margin="normal"
            label="Enter your email"
            fullWidth
            required
            sx={{ borderRadius: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            margin="normal"
            fullWidth
            required
            sx={{ borderRadius: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {error && (
            <Typography color="error" textAlign="center" mt={1}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: colors.primary[500],
              '&:hover': { backgroundColor: colors.primary[600] },
              fontWeight: 'bold',
              textTransform: 'none'
            }}
            type="submit"
            disabled={loading}
            fullWidth
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </Box>

        {/* Sign Up Option */}
        <Typography variant="body1" textAlign="center" mt={2} color={colors.primary[200]}>
          Don't have an account?{' '}
          <Button
            onClick={() => setSignUpModalOpen(true)}
            sx={{
              textTransform: 'none',
              color: colors.primary[300],
              fontWeight: 'bold'
            }}
          >
            Sign Up
          </Button>
        </Typography>

        {/* Sign Up Modal */}
        <AdminSignupModal isOpen={isSignUpModalOpen} onClose={() => setSignUpModalOpen(false)} />
      </Box>
    </Modal>
  );
};

export default AdminModal;

