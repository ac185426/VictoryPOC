import Bar from '../Charts/Bar';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import { useState } from 'react';
import lightTheme from '../Themes/lightTheme';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, Background } from 'victory';
import data from '../Data/data';
import { CustomText } from '../Components/CustomText';
import darkTheme from '../Themes/darkTheme';

const CardComponent = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [lob, setLob] = useState('Light');
  const [background, setBackground] = useState('#ffffff');
  const themeHandler = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      setLob('Dark');
      setBackground('#2C2C2E');
    } else {
      setTheme(lightTheme);
      setLob('Light');
      setBackground('#ffffff');
    }
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: background }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Victory POC
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {lob}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button
            variant="outlined"
            onClick={themeHandler}
            sx={{
              color: '#491668',
              outlined: '#491668',
              outlinedInherit: '#491668',
              outlinedPrimary: '#491668',
              outlinedSecondary: '#491668',
            }}
          >
            Change Theme
          </Button>
        </Box>
      </Box>
      <Box sx={{ color: '#EBEBF599' }}>
        {/* <Bar /> */}
        <VictoryChart domainPadding={50} theme={theme}>
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5]}
            //tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
            //tickLabelComponent={}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={(x) => `$${x}`}
            //label={<Axis />}
          />
          <VictoryBar animate data={data} labelComponent={<CustomText />} />
        </VictoryChart>
      </Box>
    </Card>
  );
};

export default CardComponent;
