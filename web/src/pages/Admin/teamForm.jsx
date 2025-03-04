import React, { useState } from 'react';
import { Box, Button, TextField, Rating, Avatar } from '@mui/material';
import { useMediaQuery } from "@mui/material";
import Header from './header';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { createTeamMember } from "../../redux/admin/slice/teamSlice";
import { toast } from "react-toastify";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Input = styled('input')({
    display: 'none',
});

const CircularButton = styled(Button)(({ theme }) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const TeamForm = () => {
    const dispatch = useDispatch();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const [formData, setFormData] = useState({
        empID:"",
        name: "",
        role: "",
        email: "",
        contact: "",
        location: "",
        bio: "",
        avatar: null,
        previewImage: null,
        rating: null,
        instagram: "",
        facebook: "",
        twitter: "",
        linkedin: "",
    });

    const [errors, setErrors] = useState({});

    

const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        if (!file.type.startsWith("image/")) {
            toast.error("Only image files are allowed!");
            return;
        }
        if (file.size > 5 * 1024 * 1024) { // 5 MB limit
            toast.error("File size exceeds 5 MB!");
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setFormData((prev) => ({ ...prev, avatar: file }));
            }
        };
        reader.readAsDataURL(file);
    }
};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.empID) newErrors.empID = "Employee Id  is required";
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.role) newErrors.role = "Role is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email!";
        if (!formData.contact) newErrors.contact = "Contact number is required";
        else if (!phoneRegExp.test(formData.contact)) newErrors.contact = "Phone number is not valid!";
        if (!formData.location) newErrors.location = "Location is required";
        if (!formData.bio) newErrors.bio = "Bio is required";
        if (!formData.avatar) newErrors.avatar = "Image file is required";
        if (formData.rating === null) newErrors.rating = "Rating is required";
        if (formData.instagram && !/^https?:\/\/.*$/.test(formData.instagram)) newErrors.instagram = "Invalid URL for Instagram";
        if (formData.facebook && !/^https?:\/\/.*$/.test(formData.facebook)) newErrors.facebook = "Invalid URL for Facebook";
        if (formData.twitter && !/^https?:\/\/.*$/.test(formData.twitter)) newErrors.twitter = "Invalid URL for Twitter";
        if (formData.linkedin && !/^https?:\/\/.*$/.test(formData.linkedin)) newErrors.linkedin = "Invalid URL for LinkedIn";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        
        const formDataToSend = new FormData();
        formDataToSend.append('empID', formData.empID);
        formDataToSend.append('name', formData.name);
        formDataToSend.append('role', formData.role);
        formDataToSend.append('contactInfo[email]', formData.email); 
        formDataToSend.append('contactInfo[phone]', formData.contact);
        formDataToSend.append('contactInfo[location]', formData.location);
        formDataToSend.append('bio', formData.bio);
        formDataToSend.append('avatar', formData.avatar);
        formDataToSend.append('rating', formData.rating);
        formDataToSend.append('socialMedia[instagram]', formData.instagram);
        formDataToSend.append('socialMedia[facebook]', formData.facebook);
        formDataToSend.append('socialMedia[twitter]', formData.twitter);
        formDataToSend.append('socialMedia[linkedin]', formData.linkedin);
        
        try {
            const resultAction = await dispatch(createTeamMember(formDataToSend));
            if (createTeamMember.fulfilled.match(resultAction)) {
                toast.success('Team member created successfully!');
            } else {
                toast.error(resultAction.payload || 'Failed to create team member');
            }
        } catch (error) {
            console.error(error);
            toast.error('An unexpected error occurred.');
        }
    };

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="flex-start">
                <Header title="CREATE TEAM MEMBER" subtitle="Create a New Team Member Profile" />
            </Box>
            <form onSubmit={handleFormSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        label="empID"
                        onChange={handleChange}
                        value={formData.empID}
                        name="empID"
                        error={!!errors.empID}
                        helperText={errors.empID}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Name"
                        onChange={handleChange}
                        value={formData.name}
                        name="name"
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Role"
                        onChange={handleChange}
                        value={formData.role}
                        name="role"
                        error={!!errors.role}
                        helperText={errors.role}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Email"
                        onChange={handleChange}
                        value={formData.email}
                        name="email"
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Contact Number"
                        onChange={handleChange}
                        value={formData.contact}
                        name="contact"
                        error={!!errors.contact}
                        helperText={errors.contact}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Location"
                        onChange={handleChange}
                        value={formData.location}
                        name="location"
                        error={!!errors.location}
                        helperText={errors.location}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Bio"
                        onChange={handleChange}
                        value={formData.bio}
                        name="bio"
                        error={!!errors.bio}
                        helperText={errors.bio}
                        sx={{ gridColumn: "span 4" }}
                    />

                    {/* Social Media Links */}
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Instagram URL"
                        onChange={handleChange}
                        value={formData.instagram}
                        name="instagram"
                        error={!!errors.instagram}
                        helperText={errors.instagram}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Facebook URL"
                        onChange={handleChange}
                        value={formData.facebook}
                        name="facebook"
                        error={!!errors.facebook}
                        helperText={errors.facebook}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Twitter URL"
                        onChange={handleChange}
                        value={formData.twitter}
                        name="twitter"
                        error={!!errors.twitter}
                        helperText={errors.twitter}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        label="LinkedIn URL"
                        onChange={handleChange}
                        value={formData.linkedin}
                        name="linkedin"
                        error={!!errors.linkedin}
                        helperText={errors.linkedin}
                        sx={{ gridColumn: "span 2" }}
                    />

                    {/* Image Input Field */}
                    <label htmlFor="avatar">
                        <Input
                            accept="image/*"
                            id="avatar"
                            type="file"
                            onChange={handleFileChange}
                        />
                        <CircularButton component="span">
                            <CameraAltIcon />
                        </CircularButton>
                    </label>
                    {avatarPreview && (
                    <Box mt={2}>
                        <Avatar src={avatarPreview} sx={{ width: 120, height: 120 }} />
                    </Box>
                    )}

                    {/* Rating */}
                    <Box sx={{ gridColumn: "span 4" }}>
                        <Rating
                            value={formData.rating}
                            onChange={(_, newValue) => setFormData(prev => ({ ...prev, rating: newValue }))}
                        />
                        {errors.rating && <p style={{ color: "red" }}>{errors.rating}</p>}
                    </Box>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                >
                    Create Member
                </Button>
            </form>
        </Box>
    );
};

export default TeamForm;
