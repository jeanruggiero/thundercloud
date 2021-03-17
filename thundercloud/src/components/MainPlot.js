import React, {useEffect, useState} from "react";
import Plot from 'react-plotly.js';
import Paper from '@material-ui/core/Paper'
import {API_URL} from "../Constants";
import Box from "@material-ui/core/Box";

const axios = require('axios');
const colors = ["red", "blue", "green"];

export default function MainPlot(props) {

  const [data, setData] = useState();

  console.log(data);

  useEffect(() => {

    setData(null);

    console.log(API_URL);
    axios.get(API_URL + 'data/').then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, [props]);


  if (data) {
    return (
      <Paper>
        <Box>
          {
            Object.entries(data).map(([key, value]) => {
              return (
                <Plot
                  data={[
                    {
                      x: value[0]['Data'].map((item) => {
                        return item['Timestamp']
                      }),
                      y: value[0]['Data'].map((item) => {
                        return item['Value']
                      }),
                      type: 'scatter',
                      mode: 'lines'
                    }
                  ]}
                  layout={{
                    title: 'A Fancy Plot',
                    autosize: true
                  }}
                  useResizeHandler={true}
                  style={{width: "100%", height: "100%"}}
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