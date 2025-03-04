import React from "react";
import LineChart from "../pages/Admin/charts/lineChart";
import { Box } from "@mui/material";
import Header from '../pages/Admin/header';

const Line = () => {
  
  return (
    <Box m="20px" height="75vh" p="2px">
      <Header title="Line CHART" subtitle="simple line chart" />
      <LineChart />
    </Box>
  );
};

export default Line;
