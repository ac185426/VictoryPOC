import { Box, Card, CardContent, Typography } from '@mui/material';
import { ScatterPoint } from './ScatterPoint';
import { useState, useEffect } from 'react';
import { VictoryChart, VictoryLabel, VictoryScatter } from 'victory';
import useCard from './useCard';
import darkTheme from '../Themes/darkTheme';
import lightTheme from '../Themes/lightTheme';

export const ScatterChart = () => {
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
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: background,
        height: 350,
        width: '55em',
        mt: 5,
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

          {/* Subheader*/}
          <Typography variant="subtitle1" sx={{ color: subTextTheme }}>
            {lob}
          </Typography>

          {/* Description */}
          <Typography sx={{ color: textTheme, maxWidth: 400, mt: 3 }}>
            Scatter Plot displays...
          </Typography>
        </CardContent>

        {/* Theme Button for Light + dark theme */}
        <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
          {lob === 'Light' && (
            <div>
              <LightStyles variant="outlined" onClick={themeHandler}>
                Change Theme
              </LightStyles>
              <LightStyles variant="outlined" onClick={hideGrid} sx={{ mt: 1, minWidth: '10em' }}>
                {showGrid ? 'Show Grid' : 'Hide Grid'}
              </LightStyles>
            </div>
          )}

          {lob === 'Dark' && (
            <div>
              <DarkStyles variant="outlined" onClick={themeHandler}>
                Change Theme
              </DarkStyles>
              <DarkStyles variant="outlined" onClick={hideGrid} sx={{ mt: 1, minWidth: '10em' }}>
                {showGrid ? 'Show Grid' : 'Hide Grid'}
              </DarkStyles>
            </div>
          )}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <VictoryChart
          theme={chartTheme}
          domain={{ x: [0, 5], y: [0, 7] }}
          events={[
            {
              target: 'data',
              childName: 'Bar-1',
              eventHandlers: {
                onClick: () => ({
                  target: 'data',
                  mutation: () => ({ style: { fill: 'orange' } }),
                }),
              },
            },
          ]}
        >
          <VictoryScatter
            name="scatter1"
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ]}
            size={10}
            labels={({ datum }) => `Y: ${datum.y}`}
            labelComponent={<VictoryLabel dy={8} />}
            dataComponent={<ScatterPoint tabIndex={0} />}
          />
        </VictoryChart>
      </Box>
    </Card>
  );
};
