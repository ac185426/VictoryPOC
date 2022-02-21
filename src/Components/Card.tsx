import Bar from '../Charts/Bar';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import { useState } from 'react';
import bankingTheme from '../Themes/bankingTheme';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import data from '../Data/data';
import { CustomText } from '../Components/CustomText';
import retailTheme from '../Themes/retailTheme';

const CardComponent = () => {
  const [theme, setTheme] = useState(bankingTheme);
  const [lob, setLob] = useState('Banking');
  const themeHandler = () => {
    if (theme === bankingTheme) {
      setTheme(retailTheme);
      setLob('Retail');
    } else {
      setTheme(bankingTheme);
      setLob('Banking');
    }
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#edf0ee' }}>
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
          <Button variant="outlined" onClick={themeHandler}>
            Change Theme
          </Button>
        </Box>
      </Box>
      <Box>
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
