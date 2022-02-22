import Bar from '../Charts/Bar';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, Background } from 'victory';
import data from '../Data/data';
import { CustomText } from '../Components/CustomText';
import useCard from './useCard';
import { useState } from 'react';
import darkTheme from '../Themes/darkTheme';
import lightTheme from '../Themes/lightTheme';

const CardComponent = ({ show }: any) => {
  const { chartTheme, lob, background, themeHandler, LightStyles, DarkStyles } = useCard();
  const [showGrid, setShowGrid] = useState(true);
  const hidden = () => {
    if (showGrid === true) {
      setShowGrid(!showGrid);
      if (chartTheme === darkTheme) {
        //visable dark grid
        darkTheme.axis.style.grid.stroke = '#EBEBF54D';
      } else {
        //visable light grid
        lightTheme.axis.style.grid.stroke = '#EBEBF599';
      }
    } else {
      setShowGrid(!showGrid);
      if (chartTheme === darkTheme) {
        //invisable dark grid
        darkTheme.axis.style.grid.stroke = '#2C2C2E';
      } else {
        //invisable light grid
        lightTheme.axis.style.grid.stroke = '#ffffff';
      }
    }
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: background }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* Header & Subheader */}
          <Typography component="div" variant="h5">
            Victory POC
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {lob}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
          {/* Theme Buttons */}
          {lob === 'Light' && (
            <div>
              <LightStyles variant="outlined" onClick={themeHandler}>
                Change Theme
              </LightStyles>
              <LightStyles variant="outlined" onClick={hidden} sx={{ ml: 1 }}>
                Hide Grid
              </LightStyles>
            </div>
          )}

          {lob === 'Dark' && (
            <div>
              <DarkStyles variant="outlined" onClick={themeHandler}>
                Change Theme
              </DarkStyles>
              <DarkStyles variant="outlined" onClick={hidden} sx={{ ml: 1 }}>
                Hide Grid
              </DarkStyles>
            </div>
          )}

          {/* <Button variant="outlined" onClick={themeHandler}>
            Change Theme
          </Button>
          <Button variant="outlined" onClick={hidden} sx={{ ml: 1 }}>
            Hide Grid
          </Button> */}
        </Box>
      </Box>
      <Box sx={{ color: '#EBEBF599' }}>
        {/* Custom Bar */}
        <Bar />
      </Box>
    </Card>
  );
};

export default CardComponent;
