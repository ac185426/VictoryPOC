import { Box, Card, CardContent, Typography } from '@mui/material';
import useCard from './useCard';
import { useState, useEffect } from 'react';
import darkTheme from '../Themes/darkTheme';
import lightTheme from '../Themes/lightTheme';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
  Bar,
  VictoryLabel,
} from 'victory';
import data from '../Data/data';
import { CustomText } from './CustomText';
import { VictoryAccessibleGroup } from 'victory-core';

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

  const [showGrid, setShowGrid] = useState(true);

  useEffect(() => {
    const updateGrid = () => {
      console.log('Show Grid: ', showGrid);
      if (showGrid) {
        if (lob === 'Light') {
          lightTheme.axis.style.grid.stroke = 'black';
        } else if (lob === 'Dark') {
          darkTheme.axis.style.grid.stroke = 'white';
        } else {
          lightTheme.axis.style.grid.stroke = '';
          darkTheme.axis.style.grid.stroke = '';
        }
      } else {
        lightTheme.axis.style.grid.stroke = '';
        darkTheme.axis.style.grid.stroke = '';
      }
    };
    updateGrid();
  }, [showGrid, chartTheme, lob, DarkStyles, LightStyles, background]);

  const hideGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: background }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* Header & Subheader */}
          <Typography component="div" variant="h5" sx={{ color: textTheme }}>
            Victory POC
          </Typography>
          <Typography variant="subtitle1" sx={{ color: subTextTheme }}>
            {lob}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
          {/* Theme Buttons
           *This needs to be dynamic with just one render
           */}

          {lob === 'Light' && (
            <div>
              <LightStyles variant="outlined" onClick={themeHandler}>
                Change Theme
              </LightStyles>
              <LightStyles variant="outlined" onClick={hideGrid} sx={{ ml: 1, minWidth: '10em' }}>
                {showGrid ? 'Show Grid' : 'Hide Grid'}
              </LightStyles>
            </div>
          )}

          {lob === 'Dark' && (
            <div>
              <DarkStyles variant="outlined" onClick={themeHandler}>
                Change Theme
              </DarkStyles>
              <DarkStyles variant="outlined" onClick={hideGrid} sx={{ ml: 1, minWidth: '10em' }}>
                {showGrid ? 'Show Grid' : 'Hide Grid'}
              </DarkStyles>
            </div>
          )}
        </Box>
      </Box>
      <Box sx={{ color: '#EBEBF599' }}>
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
          </VictoryChart>
        </VictoryAccessibleGroup>
      </Box>
    </Card>
  );
};

export default CardComponent;
