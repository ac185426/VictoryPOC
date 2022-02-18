import { assign } from 'lodash';

//colors
const blue80 = '#233A66';
const orange50 = '#F56B03';
const blue50 = '#5792FF';
const teal60 = '#0E8764';
const magenta50 = '#EB27A6';

const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
const letterSpacing = 'normal';
const fontSize = 12;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
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
  fill: blue50,
  stroke: 'transparent',
  strokeWidth: 0,
};

const centeredLabelStyles = assign({ textAnchor: 'middle' }, baseLabelStyles);
// *
// * Strokes
// *
const strokeDasharray = '10, 5';
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

const bankingTheme = {
  area: assign(
    {
      style: {
        data: {
          fill: blue50,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  axis: assign({
    style: {
      axis: {
        stroke: blue50,
        size: 10,
      },
      axisLabels: {
        fontSize: 20,
        padding: 30,
      },
      grid: {
        stroke: magenta50,
        fill: 'none',
        pointerEvents: 'painted',
      },
      ticks: {
        stroke: orange50,
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
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  chart: baseProps,
};

export default bankingTheme;
