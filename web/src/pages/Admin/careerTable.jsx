import React, { useEffect } from 'react';
import { Box, useTheme, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'; 
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import Header from './header';
import { tokens } from '../../theme';
import { fetchJobApplications, deleteJobApplication } from "../../redux/slices/jobSlice";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CareerTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { applications, loading, error } = useSelector((state) => state.jobApplications);
  console.log(applications);

  useEffect(() => {
    dispatch(fetchJobApplications());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteJobApplication(id))
      .then(() => {
        toast.success("Career deleted successfully!");
        dispatch(fetchJobApplications());
      })
      .catch((err) => {
        toast.error(`Failed to delete contact message. ${err.message || ''}`);
      });
  };

  const handleDownloadResume = (params) => {
    const resumeLink = params.row.resume.url;
    if (resumeLink) {
      window.open(resumeLink, "_blank");
    } else {
      toast.error("Resume not available");
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell" },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "education", headerName: "Education", flex: 1 },
    { field: "skills", headerName: "Skills", flex: 1 },
    { field: "message", headerName: "Message", flex: 2 },
    { field: "experience", headerName: "Experience", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 0.8,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
             <IconButton onClick={() => handleDownloadResume(params)} color="success">
              <DownloadIcon />
            </IconButton>
          <IconButton onClick={() => handleDelete(params.row._id)} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

    
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="flex-start">
        <Header title="Career Information" subtitle="View and Manage Job Seeker Profiles" />
      </Box>

      <Box m="40px 0 0 0" height="75vh">
        <DataGrid 
          rows={applications} 
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[10]}
          checkboxSelection
          getRowId={(row) => row._id} 
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column-cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CareerTable;
