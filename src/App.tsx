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
import { Typography, useTheme } from "@mui/material";
import props, { Children } from "react";
import { CustomLabel } from "./Components/CustomLabel";

const useVictoryTheme = () => {
  const theme = useTheme();
  const baseTheme = VictoryTheme.material as any;
  console.log(baseTheme);
  // Just modify bar label styles only for now as a test
  baseTheme.bar.style.labels = {
    ...baseTheme.bar.style.labels,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.caption.fontSize ?? 12,
    letterSpacing: "normal",
    fill: theme.palette.text.primary,
  };

  return baseTheme;
};

export const App = (props: any) => {
  const theme = useVictoryTheme();

  return (
    <VictoryChart
      // adding the material theme provided with Victory
      theme={theme}
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
        // @ts-ignore
        labelComponent={<CustomLabel />}
      />
    </VictoryChart>
  );

  // < CardComponent />;
};

export default App;
