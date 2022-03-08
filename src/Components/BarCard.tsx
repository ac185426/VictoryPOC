import { Button, Box, Card, CardContent, Typography } from "@mui/material";
import useCard from "./useCard";
import { useState, useEffect } from "react";
import darkTheme from "../Themes/darkTheme";
import lightTheme from "../Themes/lightTheme";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
  Bar,
  VictoryLabel,
  VictoryPortal,
} from "victory";
import data from "../Data/data";
import { CustomText } from "./CustomText";
import { VictoryAccessibleGroup } from "victory-core";

const CardComponent = () => {
  const {
    chartTheme,
    lob,
    background,
    themeHandler,
    LightStyles,
    DarkStyles,
    textTheme,
    subTextTheme,
  } = useCard();

  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {});

  const [theme, setTheme] = useState("light");

  useEffect(() => {});

  //Not optimal
  useEffect(() => {
    const updateGrid = () => {
      if (showGrid) {
        if (lob === "Light") {
          lightTheme.axis.style.grid.stroke = "black";
        } else if (lob === "Dark") {
          darkTheme.axis.style.grid.stroke = "white";
        } else {
          lightTheme.axis.style.grid.stroke = "";
          darkTheme.axis.style.grid.stroke = "";
        }
      } else {
        lightTheme.axis.style.grid.stroke = "";
        darkTheme.axis.style.grid.stroke = "";
      }
    };
    updateGrid();
    return () => {
      lightTheme.axis.style.grid.stroke = "";
      darkTheme.axis.style.grid.stroke = "";
    };
  }, [showGrid]);

  const toggleGrid = () => {
    // console.log("Button was clicked");
    // if (showGrid === false) {
    //   setShowGrid(true);
    // }
    setShowGrid(!showGrid);
  };

  return (
    <Card
      aria-label="main-container"
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: background,
      }}
    >
      <Box
        aria-label="content-container"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          {/* Header & Subheader */}
          <Typography component="div" variant="h5" sx={{ color: textTheme }}>
            Victory POC
          </Typography>
          <Typography variant="subtitle1" sx={{ color: subTextTheme }}>
            {lob}
          </Typography>
        </CardContent>
        <Box sx={{ display: "block", alignItems: "center", pl: 1, pb: 1 }}>
          {/* Theme Buttons
           *This needs to be dynamic with just one render
           */}

          <div>
            <Button variant="outlined" onClick={themeHandler}>
              Change Theme
            </Button>
          </div>
        </Box>
      </Box>
      <Box aria-label="chart-container" sx={{ color: "#EBEBF599" }}>
        <VictoryAccessibleGroup aria-label="POC of the Victory Chart Library">
          <VictoryChart domainPadding={50} theme={chartTheme}>
            <VictoryLabel
              text="Profit per Company"
              textAnchor="middle"
              x={225}
              y={30}
              style={[{ fill: textTheme, fontSize: 20 }]}
            />
            <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            //tickValues={data.label}
            //tickFormat={({ datum }) => datum.tick}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={(x) => `$${x}`}
            />
            <VictoryBar
              animate
              data={data}
              labels={({ datum }) => datum.label}
              labelComponent={<VictoryTooltip />}
              //labelComponent={<CustomText />}

              //accessability which allows tab key through all data bars

              dataComponent={<Bar tabIndex={0} />}
              style={{
                data: {
                  fill: ({ datum }) => datum.fill,
                },
              }}
              // events={[
              //   {
              //     target: 'data',
              //     //eventKey: 'esc',
              //     eventHandlers: {
              //       //remove default label events
              //       //onMouseOver: () => {},
              //       //onMouseOut: () => {},

              //       //add toggle for tooltip
              //       onClick: () => {
              //         return [
              //           {
              //             //need to add logic that is a different data bar is clicked then the new bar will be active and the other will inactive
              //             target: 'labels',
              //             mutation: (props) => {
              //               return props.active ? { active: false } : { active: true };
              //             },
              //           },
              //         ];
              //       },
              //     },
              //   },
              // ]}
            />
            <VictoryLabel
              text="description of chart"
              textAnchor="middle"
              x={225}
              y={0}
              dx={0}
              dy={0}
              style={[{ fill: textTheme, fontSize: 20 }]}
            />
          </VictoryChart>
        </VictoryAccessibleGroup>
      </Box>
    </Card>
  );
};

export default CardComponent;
