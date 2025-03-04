import React from 'react';
import './adminLayout.css';
import HeaderComponent from './global/header';
import { MyProSidebarProvider } from './global/sidebarContext';
import { tokens } from '../theme';
import { useTheme, Box } from '@mui/material';

const AdminLayout = ({ children }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MyProSidebarProvider>
            <div className="admin-layout" style={{ height: "100%", width: "100%", display: 'flex', flexDirection: 'column' }}>
                {/* Header Component */}
                <HeaderComponent />
                
                <Box
                    component="main"
                    className="admin-main-content"
                    sx={{
                        flexGrow: 1,
                        bgcolor: colors.primary[900],
                        color: colors.grey[100],
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {children}
                </Box>
            </div>
        </MyProSidebarProvider>
    );
};

export default AdminLayout;
