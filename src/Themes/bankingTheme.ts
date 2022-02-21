import { assign } from 'lodash';

//colors
const blue80 = '#233A66';
const orange50 = '#F56B03';
const blue50 = '#5792FF';
const teal60 = '#0E8764';
const magenta50 = '#EB27A6';

const purple90 = '#F5EEFD';
const purple80 = '#D8BBF6';
const purple70 = '#C797F1';
const purple60 = '#B56CEB';
const purple50 = '#A744E5';
const purple40 = '#8D32C3';
const purple30 = '#682392';
const purple20 = '#491668';
const purple10 = '#2C0A40';
const purple5 = '#1D052C';

const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
const letterSpacing = 'normal';
const fontSize = 12;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
  padding: 50,
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: teal60,
  stroke: 'transparent',
  strokeWidth: 0,
};

const centeredLabelStyles = assign({ textAnchor: 'middle' }, baseLabelStyles);
// *
// * Strokes
// *

// const strokeDasharray = '10, 5';
// const strokeLinecap = 'round';
// const strokeLinejoin = 'round';

const bankingTheme = {
  area: assign(
    {
      style: {
        data: {
          fill: teal60,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  axis: assign({
    style: {
      axis: {
        stroke: blue50, //X and Y axis black or gray
        size: 10,
      },
      axisLabels: {
        fontSize: 20,
        padding: 30,
      },
      grid: {
        stroke: magenta50, //gridlines should be gray
        fill: magenta50,
        pointerEvents: 'painted',
      },
      ticks: {
        stroke: 'black',
        size: 10,
        fill: 'transparent',
      },
      tickLabels: {
        fontSize: 15,
        padding: 5,
      },
    },
  }),
  bar: assign(
    {
      style: {
        data: {
          fill: blue80,
          padding,
          stroke: orange50,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  chart: baseProps,
};

export default bankingTheme;
