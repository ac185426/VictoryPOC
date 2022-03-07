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
  VictoryContainer,
  VictoryPie,
  VictoryAnimation,
} from 'victory';
import data from '../Data/data';
//import { CustomText } from './CustomText';
import { VictoryAccessibleGroup } from 'victory-core';

const GuageCard = () => {
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
    <Card>
      <Box>
        <CardContent>
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
      <Box sx={{ color: '#EBEBF599', height: 400, width: 800, mt: 6 }}>
        <VictoryPie
          //standalone={false}
          animate={{ duration: 1000 }}
          startAngle={90}
          endAngle={-90}
          data={data}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = datum.y > 30 ? 'green' : 'red';
                return datum.x === 1 ? color : 'transparent';
              },
            },
          }}
        />
      </Box>
    </Card>
  );
};

export default GuageCard;
