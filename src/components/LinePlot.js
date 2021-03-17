import Plot from "react-plotly.js";
import React from "react";


export default function LinePlot(props) {
  return (
    <Plot
      data={[
        {
          x: props.x,
          y: props.y,
          type: 'scatter',
          mode: 'lines'
        }
      ]}
      layout={{
        yaxis: {
          title: props.yLabel,
          titlefont: {
            size: 12,
          }
        },
        autosize: true,
        margin: {
          l:75,
          r:50,
          b:50,
          t:20,
          pad:0
        }
      }}
      useResizeHandler={true}
      style={{width: "100%", height: "250px"}}
      />
  )
}