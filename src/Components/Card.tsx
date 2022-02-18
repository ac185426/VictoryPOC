import Bar from '../Charts/Bar';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import { useState } from 'react';
import bankingTheme from '../Themes/bankingTheme';
import { VictoryChart } from 'victory';
import retailTheme from '../Themes/retailTheme';

const CardComponent = () => {
  const [theme, setTheme] = useState(bankingTheme);
  const themeHandler = () => {
    if (theme === bankingTheme) {
      setTheme(retailTheme);
    } else {
      setTheme(bankingTheme);
    }
  };

  return (
    <Card sx={{ display: 'flex', backgroundColor: '#edf0ee' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Victory POC
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Card Component
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant="outlined" onClick={themeHandler}>
            Change Theme
          </Button>
        </Box>
      </Box>
      <Box>
        <VictoryChart theme={theme}>
          <Bar />
        </VictoryChart>
      </Box>
    </Card>
  );
};

export default CardComponent;
