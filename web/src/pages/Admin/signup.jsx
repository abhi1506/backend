import React, { useContext, useState } from 'react';
import { Modal, Box, Typography, Button, TextField, Avatar, Select, MenuItem, FormControl, InputLabel, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import { tokens } from '../../theme'; 
import { MyContext } from '../../App';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/admin/slice/authSlice';
import { toast } from 'react-toastify'; 

const roles = ['Admin', 'HR', 'Project']; 

const AdminSignupModal = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const context = useContext(MyContext);
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    role: 'Admin', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRoleChange = (e) => {
    handleChange(e); 
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    // Simple client-side validation
    if (!formData.username.includes('@')) {
      setError('Please enter a valid email.');
      setLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      await dispatch(signup(formData));
      toast.success('Signup successful!');
      setFormData({
        fullName: '',
        username: '',
        password: '',
        role: 'Admin', 
      });
      onClose(); 
    } catch (err) {
      setError(err.message || 'An error occurred during signup');
      toast.error(err.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="admin-signup-modal-title"
      aria-describedby="admin-signup-modal-description"
    >
      <Box
    sx={{
      position: "absolute",
      top: "55%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 450,
      maxHeight: "85vh",  
      overflowY: "auto",  
      bgcolor: colors.primary[900],
      borderRadius: 2,
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      p: 4,
    }}
  >
 <Box
  display="flex"
  flexDirection="column"
  alignItems="center"
  sx={{
    bgcolor: colors.primary[900], 
  }}
>

    <Avatar
      src="https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg"
      sx={{
        width: 100,
        height: 100,
        border: "2px solid white",
        boxShadow: "0px 4px 8px rgba(255,255,255,0.2)",
      }}
    />
    <Typography variant="h4" fontWeight="bold" mt="14px" color={colors.primary[100]}>
      Sign Up To Admin
    </Typography>
    <Box component="form" onSubmit={handleSignup} sx={{ width: "100%", mt: 2 }}>
      <TextField
        name="fullName"
        variant="filled"
        label="Enter your full name"
        fullWidth
        required
        value={formData.fullName}
        onChange={handleChange}
        sx={{ marginBottom: "12px" }}
      />
      <TextField
        name="username"
        variant="filled"
        label="Enter your email"
        fullWidth
        required
        value={formData.username}
        onChange={handleChange}
        sx={{ marginBottom: "12px" }}
      />
      <TextField
        label="Password"
        name="password"
        variant="filled"
        type={showPassword ? "text" : "password"}
        fullWidth
        required
        value={formData.password}
        onChange={handleChange}
        sx={{ marginBottom: "12px" }}
        InputProps={{
          endAdornment: (
            <Button onClick={() => setShowPassword(!showPassword)} sx={{ textTransform: "none" }}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          ),
        }}
      />
      <FormControl variant="filled" fullWidth sx={{ marginBottom: "12px" }}>
        <InputLabel id="role-select-label">Role</InputLabel>
        <Select labelId="role-select-label" name="role" value={formData.role} onChange={handleChange}>
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        sx={{
          backgroundColor: colors.primary[700],
          color: "white",
          marginTop: "20px",
          "&:hover": {
            backgroundColor: colors.primary[500],
          },
        }}
        type="submit"
        disabled={loading}
        fullWidth
      >
        {loading ? <CircularProgress size={24} /> : "Sign Up"}
      </Button>
    </Box>
  </Box>
  <Typography variant="h6" fontWeight="bold" mt="14px" mb="14px" color={colors.primary[100]}>
    Already have an account?
    <Button onClick={onClose} sx={{ marginLeft: "5px", textTransform: "none" }}>Login</Button>
  </Typography>
</Box>

    </Modal>
  );
};

export default AdminSignupModal;
