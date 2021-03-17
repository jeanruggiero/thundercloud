import React, {useEffect, useState} from "react";
import Plot from 'react-plotly.js';
import Paper from '@material-ui/core/Paper'
import {API_URL} from "../Constants";
import Box from "@material-ui/core/Box";
import LinePlot from "./LinePlot";

const axios = require('axios');
const colors = {1: "red", 2: "blue", 3: "green"};
const y_axis_labels = {1: "Relative Humidity (%)", 2: "Temperature (deg C)", 3: "Soil Moisture"};

export default function MainPlot(props) {

  const [data, setData] = useState();

  useEffect(() => {
    setData(null);
    axios.get(API_URL + 'data/').then((response) => {
      setData(response.data);
    });
  }, [props]);


  // TODO: investigate plotly subplots so that mouse over highlights all values for given time
  // TODO: cache data in session cache or elsewhere to avoid tons of queries of db
  if (data) {
    return (
      <Paper>
        <Box pt={3}>
          {
            Object.entries(data).map(([key, value]) => {
              console.log(y_axis_labels[key]);
              return (
                <LinePlot
                  x={value[0]['Data'].map((item) => {return item['Timestamp']})}
                  y={value[0]['Data'].map((item) => {return item['Value']})}
                  yLabel={y_axis_labels[key]}
                />
              )
            })
          }
        </Box>
      </Paper>
    )
  } else {
    return null
  }
}