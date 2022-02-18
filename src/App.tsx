import "./App.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from "victory";
import data from "./Data/data";
import CardComponent from "./Components/Card";
import { Typography } from "@mui/material";
import props, { Children } from "react";

export const App = (props: any) => {
  return (
    <VictoryChart
      // adding the material theme provided with Victory
      theme={VictoryTheme.material}
      // domainPadding will add space to each side of VictoryBar to
      // prevent it from overlapping the axis
      domainPadding={{ x: 20, y: 20 }}
    >
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => `$${x / 1000}k`}
      />
      <VictoryBar
        //override styles
        style={{ data: { fill: "#c43a31" } }}
        //Data access through prop
        data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"
        //labels
        labels={({ datum }) => `y: ${datum.y}`}
        labelComponent={
          // <VictoryLabel
          //   dy={-20}
          //   backgroundStyle={{ fill: "tomato", opacity: 0.6 }}
          //   backgroundPadding={{ bottom: 5, top: 5 }}
          // ></VictoryLabel>
          <Typography {...props}></Typography>
        }
      />
    </VictoryChart>
  );

  // < CardComponent />;
};

export default App;
