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

const colors = [purple60, 'lightgray'];

//mui typography
const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

const letterSpacing = 'normal';
const fontSize = 14;
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
  fontFamily: fontFamily,
  fontSize,
  letterSpacing,
  padding,
  fill: 'white',
  stroke: 'transparent',
  strokeWidth: 0,
};

const darkTheme = {
  // area: assign(
  //   {
  //     style: {
  //       data: {
  //         fill: primary,
  //       },
  //       labels: baseLabelStyles,
  //     },
  //   },
  //   baseProps,
  // ),
  axis: assign({
    style: {
      axis: {
        stroke: purple70,
        size: 10,
      },
      axisLabels: {
        fontSize: 20,
        padding: 50,
        fontfamily: fontFamily,
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
        fontfamily: fontFamily,
      },
    },
  }),
  bar: assign(
    {
      style: {
        data: {
          padding,
          stroke: purple70,
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  chart: baseProps,
  tooltip: {
    style: assign({}, baseLabelStyles, { padding: 0, pointerEvents: 'none' }),
    flyoutStyle: {
      stroke: '#f0f0f0',
      strokeWidth: 1,
      fill: 'black',
      pointerEvents: 'none',
    },
    flyoutPadding: 5,
    cornerRadius: 3,
    pointerLength: 10,
  },
  pie: assign(
    {
      colorScale: colors,
      style: {
        data: {
          //fill: 'red',
          padding,
          stroke: 'transparent',
          strokeWidth: 1,
        },
        labels: assign({}, baseLabelStyles, { padding: 20 }),
      },
    },
    baseProps,
  ),
  legend: assign({
    gutter: 20,
    orientation: 'horizontal',
    titleOrientation: 'top',
    style: {
      data: {
        type: 'circle',
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 }),
    },
  }),
};

export default darkTheme;
