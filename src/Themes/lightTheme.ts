import { assign } from 'lodash';

//colors
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

const primary = '#ffffff';
const secondary = '#EBEBF599';
const tertiary = '#EBEBF54D';

// background: #FFFFFF80;
// background: #4D4D4D;

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
  fill: 'black',
  stroke: 'transparent',
  strokeWidth: 0,
};

const lightTheme = {
  area: assign(
    {
      style: {
        data: {
          fill: 'teal60',
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  axis: assign({
    style: {
      axis: {
        stroke: purple20, //X and Y axis black or gray
        size: 15,
      },
      axisLabels: {
        fontSize: 20,
        padding: 30,
      },
      grid: {
        stroke: '', //tertiary, //gridlines should be gray
        fill: tertiary,
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
          fill: purple80,
          padding,
          stroke: purple20,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  chart: baseProps,
};

export default lightTheme;
