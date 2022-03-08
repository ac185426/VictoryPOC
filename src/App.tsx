import './App.css';
import CardComponent from './Components/BarCard';
import GuageCard from './Components/GaugeCard';
import { Box, Divider } from '@mui/material';

function App() {
  return (
    <Box>
      <CardComponent />
      <Divider sx={{ mt: 2 }} />
      <GuageCard />
    </Box>
  );
}

export default App;
