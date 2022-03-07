import { Box, Card, CardContent, Typography } from '@mui/material';
import useCard from './useCard';
import { useState, useEffect } from 'react';
import darkTheme from '../Themes/darkTheme';
import lightTheme from '../Themes/lightTheme';
import {
  VictoryTooltip,
  VictoryLabel,
  VictoryContainer,
  VictoryPie,
  VictoryAnimation,
} from 'victory';
import data2 from '../Data/data2';

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

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: background, height: 500 }}>
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
            Guage chart displays
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
            </div>
          )}

          {lob === 'Dark' && (
            <div>
              <DarkStyles variant="outlined" onClick={themeHandler}>
                Change Theme
              </DarkStyles>
            </div>
          )}
        </Box>
      </Box>
      <Box sx={{ color: '#EBEBF599', height: 400, width: 800, mt: 6 }}>
        <VictoryPie
          theme={chartTheme}
          startAngle={-90}
          endAngle={90}
          data={data2}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          //   style={{
          //     data: {
          //       fill: ({ datum }) => {
          //         const color = datum.y > 30 ? 'green' : 'red';
          //         return datum.x === 1 ? color : 'transparent';
          //       },
          //     },
          //   }}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          x={200}
          y={200}
          text={'hello'}
          style={{ fontSize: 45 }}
        />
      </Box>
    </Card>
  );
};

export default GuageCard;
