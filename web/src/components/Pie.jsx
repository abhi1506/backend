import React from 'react'
import PieChart from '../pages/Admin/charts/pieChart';
import { Box } from '@mui/material';
import Header from '../pages/Admin/header';

const Pie = () => {
    
    return (
        <Box m="20px" height="75vh" p="2px">
            <Header title="BAR CHART" subtitle="simple bar chart" />
            <PieChart />
        </Box>
    )
}

export default Pie