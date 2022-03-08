import './App.css';
import CardComponent from './Components/BarCard';
import GaugeCard from './Components/GaugeCard';
import { Box } from '@mui/material';
import { data3 } from './Data/data3';
import { data2 } from './Data/data2';

function App() {
  const dataCardOne = data3();
  const dataCardTwo = data2();

  return (
    <Box sx={{ backgroundColor: '#EBEBF599', width: '100%', height: '100%' }}>
      <CardComponent />
      <Box sx={{ display: 'flex', width: '110em' }}>
        <GaugeCard percent={dataCardOne.percent} dataGauge={dataCardOne.dataGauge} />
        <GaugeCard percent={dataCardTwo.percent} dataGauge={dataCardTwo.dataGauge} />
      </Box>
    </Box>
  );
}

export default App;
