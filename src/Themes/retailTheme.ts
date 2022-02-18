import { assign } from 'lodash';

//colors
const red60 = '#CC3933';
const orange50 = '#F56B03';
const teal60 = '#0E8764';
const green70 = '#026800';
const blue50 = '#5792FF';

const colors = [red60, orange50, teal60, green70, blue50];

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

const retailTheme = {
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
        stroke: green70,
        size: 10,
      },
      axisLabels: {
        fontSize: 20,
        padding: 30,
      },
      grid: {
        stroke: green70,
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
          fill: red60,
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

export default retailTheme;
