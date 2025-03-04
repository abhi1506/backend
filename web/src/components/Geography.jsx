import React from "react";
import GeographyChart from "../pages/Admin/charts/geographyChart";
import { Box } from "@mui/material";
import Header from '../pages/Admin/header';

const Geography = () => {
  return (
    <Box m="20px" height="75vh" p="2px">
      <Header title="Line CHART" subtitle="simple line chart" />
      <GeographyChart />
    </Box>
  );
};

export default Geography;
