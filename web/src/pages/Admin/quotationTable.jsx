import React, { useEffect, useState } from 'react';
import { Box, Typography,  IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotations,deleteQuotation } from '../../redux/slices/quotationSlice';
import Header from './header';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
const RequestForQuotation = () => {
    const dispatch = useDispatch();
    const { quotations, loading } = useSelector((state) => state.quotations);
   

    useEffect(() => {
        dispatch(fetchQuotations());
    }, [dispatch]);



    const handleDelete = async (id) => {
        try {
            await dispatch(deleteQuotation(id));
            toast.success('RFQ deleted successfully!');
            dispatch(fetchQuotations());
        } catch (error) {
            toast.error('Failed to delete RFQ.');
            console.error(error);
        }
    };

    const columns = [
        { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'company_organization', headerName: 'Company', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'contact', headerName: 'Contact', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (
                <Box display="flex" gap={1}>
                    <IconButton color="error" onClick={() => handleDelete(params.row._id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
        {
            field: 'quotationOptions',
            headerName: 'Quotation Options',
            flex: 2,
            renderCell: (params) => {
                const { webDesign, webApplication, cloudSolution, otherQueries } = params.row.quotationOptions;
                return (
                    <Box textAlign="left">
      <Typography
        variant="body2"
        sx={{ color: webDesign ? 'green' : 'red' }}
      >
        Web Design: {webDesign ? '✔' : '❌'}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: webApplication ? 'green' : 'red' }}
      >
        Web Application: {webApplication ? '✔' : '❌'}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: cloudSolution ? 'green' : 'red' }}
      >
        Cloud Solution: {cloudSolution ? '✔' : '❌'}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: otherQueries ? 'green' : 'red' }}
      >
        Other Queries: {otherQueries ? '✔' : '❌'}
      </Typography>
    </Box>
                );
            },
        },
    ];
    
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Header title="Request for Quotation" subtitle="Managing RFQs" />
            </Box>
            <Box m="40px 0 0 0" height="75vh">
                
            <DataGrid
  rows={quotations}  
  columns={columns} 
  getRowId={(row) => row._id}  
/>

            
            </Box>
        </Box>
    );
};

export default RequestForQuotation;
