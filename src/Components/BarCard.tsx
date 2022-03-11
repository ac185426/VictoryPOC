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
  Bar,
  VictoryLabel,
  VictoryLegend,
} from 'victory';
import data from '../Data/data';
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
  const [angle, setAngle] = useState(0);
  const [axisLabel, setAxisLabel] = useState(20);

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

  const legendAngle = () => {
    if (angle === 0) {
      setAngle(25);
      setAxisLabel(30);
    } else {
      setAngle(0);
      setAxisLabel(20);
    }
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: background,
        height: 500,
        width: '105em',
        mb: 5,
        ml: 5,
        mr: 5,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* Header & Subheader */}
          <Typography component="div" variant="h5" sx={{ color: textTheme }}>
            Victory POC
          </Typography>
          <Typography variant="subtitle1" sx={{ color: subTextTheme }}>
            {lob}
          </Typography>
          <Typography sx={{ color: textTheme, maxWidth: 400, mt: 14 }}>
            Chart displays the average cost customers pay when eating at these resturants. At
            Chipotle customers average $5, at Mad Mex customers average $4, at Starbucks customers
            average $6, at Brusters customers average $3, and at Jinya customers average $7.
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
              <LightStyles
                variant="outlined"
                onClick={legendAngle}
                sx={{ ml: 1, minWidth: '10em' }}
              >
                Change Label Angle
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
              <DarkStyles variant="outlined" onClick={legendAngle} sx={{ ml: 1, minWidth: '10em' }}>
                Change Label Angle
              </DarkStyles>
            </div>
          )}
        </Box>
      </Box>
      <Box sx={{ color: '#EBEBF599', height: 350, width: 800, mt: 6 }}>
        <VictoryAccessibleGroup aria-label="POC of the Victory Chart Library">
          <VictoryChart
            domainPadding={30}
            theme={chartTheme}
            padding={{ left: 50, top: 45, bottom: 70, right: 0 }}
          >
            {/* Chart X-Axis & Y-Axis + Title */}
            <VictoryLabel
              text="Profit per Company"
              textAnchor="middle"
              x={260}
              y={20}
              style={[{ fill: textTheme, fontSize: 20 }]}
            />
            <VictoryAxis
              label="Restaurants"
              axisLabelComponent={
                <VictoryLabel dy={axisLabel} style={[{ fill: textTheme, fontSize: 16 }]} />
              }
              //removes default labels
              tickFormat={() => ''}
            />
            <VictoryAxis
              dependentAxis
              label="Average Customer Cost"
              axisLabelComponent={
                <VictoryLabel dy={-10} style={[{ fill: textTheme, fontSize: 16 }]} />
              }
            />
            {/* Removes default labels */}
            <VictoryAxis tickFormat={() => ''} />

            {/* Legend used as Tick Labels */}
            <VictoryLegend
              x={45}
              y={245}
              gutter={14}
              symbolSpacer={5}
              orientation="horizontal"
              itemsPerRow={5}
              labelComponent={<VictoryLabel angle={angle} />}
              data={data}
            />

            <VictoryBar
              animate
              data={data}
              y="cost"
              x="name"
              labelComponent={<VictoryTooltip />}
              //accessability which allows tab key through all data bars
              dataComponent={<Bar tabIndex={0} ariaLabel={({ datum }) => `${datum.x}`} />}
              style={{
                data: {
                  fill: ({ datum }) => datum.fill,
                },
              }}
            />
          </VictoryChart>
        </VictoryAccessibleGroup>
      </Box>
    </Card>
  );
};

export default CardComponent;
