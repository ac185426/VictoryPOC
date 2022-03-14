import './App.css';
import CardComponent from './Components/BarCard';
import GaugeCard from './Components/GaugeCard';
import { Box } from '@mui/material';
import { data3 } from './Data/data3';
import { ScatterChart } from './Components/ScatterChart';

function App() {
  const dataCardOne = data3();

  return (
    <Box sx={{ backgroundColor: '#EBEBF599', width: '100vw', height: '100vh' }}>
      <CardComponent />
      <Box sx={{ display: 'flex', width: '110em' }}>
        <GaugeCard percent={dataCardOne.percent} dataGauge={dataCardOne.dataGauge} />
        <ScatterChart />
      </Box>
    </Box>
  );
}

export default App;
