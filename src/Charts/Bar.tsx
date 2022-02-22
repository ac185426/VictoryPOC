import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import data from '../Data/data';
import { CustomText } from '../Components/CustomText';
import useCard from '../Components/useCard';

const Bar = () => {
  const { chartTheme } = useCard();
  return (
    <VictoryChart domainPadding={50} theme={chartTheme}>
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4, 5]}
        //tickFormat={['Q1', 'Q2', 'Q3', 'Q4', 'Q5']}
        //tickLabelComponent={}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => `$${x}`}
        // label={<Axis />}
      />
      <VictoryBar animate data={data} labelComponent={<CustomText />} />
    </VictoryChart>
  );
};
export default Bar;
