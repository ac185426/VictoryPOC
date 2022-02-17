import Bar from '../Charts/Bar';
import { Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useState } from 'react';

const CardComponent = () => {
  const [theme, setTheme] = useState(true);
  const themeHandler = () => {
    setTheme(false);
  };

  return (
    <Card sx={{ display: 'flex' }}>
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
          <Button onClick={themeHandler}>Change Theme</Button>
        </Box>
      </Box>
      <Bar />
    </Card>
  );
};

export default CardComponent;
