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
  fill: 'white',
  stroke: 'transparent',
  strokeWidth: 0,
};

const darkTheme = {
  area: assign(
    {
      style: {
        data: {
          fill: primary,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  axis: assign({
    style: {
      axis: {
        stroke: purple70,
        size: 10,
      },
      axisLabels: {
        fontSize: 20,
        padding: 30,
      },
      grid: {
        stroke: '', //'#EBEBF54D',
        fill: 'none',
        pointerEvents: 'painted',
        opacity: 0.5,
      },
      ticks: {
        stroke: '#EBEBF54D',
        size: 10,
        fill: 'transparent',
      },
      tickLabels: {
        fontSize: 15,
        padding: 5,
        fill: 'white',
      },
    },
  }),
  bar: assign(
    {
      style: {
        data: {
          fill: purple90,
          padding,
          stroke: purple70,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  chart: baseProps,
};

export default darkTheme;
