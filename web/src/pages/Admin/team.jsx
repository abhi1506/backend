import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, Avatar, useTheme, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamMembers, deleteTeamMember, updateTeamMember } from '../../redux/admin/slice/teamSlice';
import Header from './header';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import { tokens } from '../../theme';
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

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
    const { teamMembers, loading } = useSelector((state) => state.team);
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        dispatch(fetchTeamMembers());
    }, [dispatch]);

    const handleEdit = (member) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleDelete = async (id) => {
        try {
            await dispatch(deleteTeamMember(id));
            toast.success('Team member deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete team member.');
            console.error(error);
        }
    };

    const handleSave = async () => {
        if (selectedMember) {
            const formData = new FormData();
            formData.append('empID', selectedMember.empID);
            formData.append('name', selectedMember.name);
            formData.append('role', selectedMember.role);
            formData.append('email', selectedMember.contactInfo.email);
            formData.append('phone', selectedMember.contactInfo.phone);
            formData.append('location', selectedMember.contactInfo.location);
            formData.append('bio', selectedMember.bio);
            formData.append('instagram', selectedMember.socialMedia.instagram);
            formData.append('facebook', selectedMember.socialMedia.facebook);
            formData.append('twitter', selectedMember.socialMedia.twitter);
            formData.append('linkedin', selectedMember.socialMedia.linkedin);
            if (selectedMember.image instanceof File) {
                formData.append('avatar', selectedMember.image);
            }

            try {
                const resultAction = await dispatch(updateTeamMember({ id: selectedMember._id, updatedMember: formData }));
                if (updateTeamMember.fulfilled.match(resultAction)) {
                    toast.success('Team member updated successfully!');
                    setOpen(false);
                } else {
                    toast.error(resultAction.payload || 'Failed to update team member');
                }
            } catch (error) {
                console.error(error);
                toast.error('An unexpected error occurred while updating the team member.');
            }
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedMember({ ...selectedMember, image: file });
    };

    const columns = [
        {
            field: 'avatar',
            headerName: 'Avatar',
            flex: 0.5,
            renderCell: (params) => (
                <Avatar
                    alt={params.row.name}
                    src={params.row.avatar.url || '/default-avatar.png'}
                    sx={{ width: 40, height: 40 }}
                />
            ),
        },
        { field: 'name', headerName: 'Name', flex: 0.5, cellClassName: 'name-column-cell' },
        { field: 'role', headerName: 'Role', flex: 1 },
        { field: 'rating', headerName: 'Rating', flex: 1 },
        {
            field: 'empID',
            headerName: 'EMP ID',
            flex: 1,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (
                <Box display="flex" gap={1}>
                    <IconButton color="success" onClick={() => handleEdit(params.row)}>
                        <UpdateIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(params.row._id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ];

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="flex-start">
                <Header title="TEAM" subtitle="Managing the Team Members" />
            </Box>
            <Box m="40px 0 0 0" height="75vh">
                {loading ? (
                    <Typography variant="h6">Loading...</Typography>
                ) : (
                    <DataGrid
                        rows={teamMembers}
                        columns={columns}
                        pageSize={20}
                        checkboxSelection
                        getRowId={(row) => row._id}
                    />
                )}
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    PaperProps={{
                        sx: { backgroundColor: colors.primary[600] },
                    }}
                >
                      <Box display="flex" justifyContent="flex-start" padding={2}>
                      <Header title="Update Team Member" subtitle="Edit details of the selected member" />
                        </Box>
                    <DialogContent>
                    {selectedMember?.avatar && (
            <Box display="flex" justifyContent="center" alignItems="center" marginBottom={1}>
                <img 
                    src={selectedMember.avatar.url} 
                    alt="Avatar" 
                    style={{ width: 100, height: 100, borderRadius: '50%' }} 
                />
            </Box>

        )}<TextField
                            autoFocus
                            margin="dense"
                            label="empID"
                            type="text"
                            fullWidth
                            value={selectedMember?.empID || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, empID: e.target.value })}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Name"
                            type="text"
                            fullWidth
                            value={selectedMember?.name || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, name: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            label="Role"
                            type="text"
                            fullWidth
                            value={selectedMember?.role || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, role: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            type="email"
                            fullWidth
                            value={selectedMember?.contactInfo?.email || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, contactInfo: { ...selectedMember.contactInfo, email: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Phone"
                            type="text"
                            fullWidth
                            value={selectedMember?.contactInfo?.phone || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, contactInfo: { ...selectedMember.contactInfo, phone: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Location"
                            type="text"
                            fullWidth
                            value={selectedMember?.contactInfo?.location || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, contactInfo: { ...selectedMember.contactInfo, location: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Bio"
                            type="text"
                            fullWidth
                            value={selectedMember?.bio || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, bio: e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            label="Instagram URL"
                            type="url"
                            fullWidth
                            value={selectedMember?.socialMedia?.instagram || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, socialMedia: { ...selectedMember.socialMedia, instagram: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Facebook URL"
                            type="url"
                            fullWidth
                            value={selectedMember?.socialMedia?.facebook || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, socialMedia: { ...selectedMember.socialMedia, facebook: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="Twitter URL"
                            type="url"
                            fullWidth
                            value={selectedMember?.socialMedia?.twitter || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, socialMedia: { ...selectedMember.socialMedia, twitter: e.target.value } })}
                        />
                        <TextField
                            margin="dense"
                            label="LinkedIn URL"
                            type="url"
                            fullWidth
                            value={selectedMember?.socialMedia?.linkedin || ''}
                            onChange={(e) => setSelectedMember({ ...selectedMember, socialMedia: { ...selectedMember.socialMedia, linkedin: e.target.value } })}
                        />
                     <label htmlFor="avatar">
                        <Input
                            accept="image/*"
                            id="avatar"
                            type="file"
                            onChange={handleImageChange}
                        />
                        <CircularButton component="span">
                            <CameraAltIcon />
                        </CircularButton>
                    </label>
                    </DialogContent>
                    <DialogActions>
                        <Button color="error" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button color="success" onClick={handleSave}>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
};

export default Team;
