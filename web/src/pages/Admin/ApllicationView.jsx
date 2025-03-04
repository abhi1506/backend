import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, CircularProgress, Box, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, fetchAppliedJobs } from "../../redux/slices/applyJobSlice";
import Header from "./header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const ApplicationTable = () => {
  const dispatch = useDispatch();
  const { appliedJobs, loading, error } = useSelector((state) => state.applyJob);

  useEffect(() => {
    dispatch(fetchAppliedJobs());
  }, [dispatch]);

  const handleEdit = (id) => {
    console.log(`Edit job with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      dispatch(deleteJob(id));
      dispatch(fetchAppliedJobs());
    }
  };

  const handleDownloadResume = (resume) => {
    const resumeUrl = typeof resume === "string" ? resume : resume?.url; 
    if (resumeUrl) {
      window.open(resumeUrl, "_blank");
    } else {
      alert("Resume not available");
    }
  };
  

  const columns = [
    // { field: "_id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First Name", width: 180 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "contact", headerName: "Contact", width: 180 },
    { field: "position", headerName: "Position", width: 180 },
    { field: "securityCode", headerName: "Security Code", width: 90 },
    {
      field: "resume",
      headerName: "Resume",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          color="warning"
          onClick={() => handleDownloadResume(params.row.resume)}
          disabled={!params.row.resume}
        >
          <CloudDownloadIcon />
        </IconButton>
      ),
    },
    
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton color="primary" onClick={() => handleEdit(params.row._id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => handleDelete(params.row._id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box m="5px">
      <Box display="flex" justifyContent="flex-start">
        <Header title="View Apply Job Management" subtitle="List of Jobs" />
      </Box>
      <Box m="40px 0 0 0" height="75vh">
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">
            {error}
          </Typography>
        ) : (
          <DataGrid
            rows={appliedJobs || []}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 25]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={(row) => row._id || Math.random()}
          />
        )}
      </Box>
    </Box>
  );
};

export default ApplicationTable;

