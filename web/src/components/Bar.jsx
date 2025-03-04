import React from 'react'
import { Box } from '@mui/material';
import Header from '../pages/Admin/header';
import BarChart from '../pages/Admin/charts/barChart';

const Bar = () => {
    
    return (
        <Box m="20px" height="75vh" p="2px">
            <Header title="BAR CHART" subtitle="simple bar chart" />
            <BarChart />
        </Box>
    )
}

export default Bar