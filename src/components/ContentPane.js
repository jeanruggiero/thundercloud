import React from "react";
import MainPlot from "./MainPlot";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function ContentPane(props) {

  return (
    <Box>
      <Box mb={1}>
        <Typography variant="h4">Garden Status</Typography>
      </Box>
      <MainPlot/>
    </Box>
  )
}