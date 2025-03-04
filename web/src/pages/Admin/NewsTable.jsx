import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";
import Header from "./header";
import { tokens } from "../../theme";
import { fetchNewsPosts, deleteNewsPost } from "../../redux/admin/newsSlice/newsSlice";
import { useDispatch, useSelector } from "react-redux";

const NewsTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);

  const [deleteId, setDeleteId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    dispatch(fetchNewsPosts());
  }, [dispatch]);

  const handleEdit = (id) => {
    console.log("Edit news:", id);
    // Implement navigation to edit page or open modal
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setOpenDialog(true);
  };

  const confirmDelete = () => {
    dispatch(deleteNewsPost(deleteId));
    setOpenDialog(false);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Title", flex: 1, cellClassName: "title-column-cell" },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "content", headerName: "Description", flex: 1 },
    {
      field: "featured",
      headerName: "Featured",
      flex: 0.7,
      renderCell: (params) => (params.row.featured ? "✅ Yes" : "❌ No"),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.7,
      sortable: false,
      renderCell: (params) => (
        <Box display="flex">
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEdit(params.row._id)} color="primary">
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteClick(params.row._id)} color="error">
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="flex-start">
        <Header title="NEWS MANAGEMENT" subtitle="Manage Published News Articles" />
      </Box>
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          rows={news}
          columns={columns}
          pageSizeOptions={[10, 20, 50, 100]}
          checkboxSelection
          getRowId={(row) => row._id}
          sx={{
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderBottom: "none" },
            "& .title-column-cell": { color: colors.greenAccent[300] },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>Are you sure you want to delete this news post?</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewsTable;
