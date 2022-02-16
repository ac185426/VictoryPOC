//import { Typography } from '@mui/material';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import data from '../Data/data';
import Text from '../Components/typography';
//import Axis from '../Themes/xAxis';
//import Axis from '../Themes/xAxis';
//import theme from '../Themes/theme';

const Bar = () => {
  return (
    <VictoryChart domainPadding={50}>
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4, 5]}
        //tickFormat={['1', '2', 'Quarter 3', 'Quarter 4']}
        //tickLabelComponent={}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => `$${x}`}
        //label={<Axis />}
        //axisLabelComponent={<Axis />}
      />
      <VictoryBar data={data} labelComponent={<VictoryLabel />} />
    </VictoryChart>
  );
};
export default Bar;
