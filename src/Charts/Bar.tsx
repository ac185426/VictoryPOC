import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import data from '../Data/data';
import { CustomText } from '../Components/CustomText';
import bankingTheme from '../Themes/bankingTheme';

const Bar = () => {
  return (
    <VictoryChart domainPadding={50}>
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
      <VictoryBar data={data} labelComponent={<CustomText />} />
    </VictoryChart>
  );
};
export default Bar;
