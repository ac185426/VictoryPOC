import { Typography, useTheme } from "@mui/material";
import React, { Component } from "react";
import { VictoryLabel } from "victory";
import type { VictoryBarProps, VictoryBar } from "victory";

export const CustomLabel = (props: any) => {
  const theme = useTheme();
  const {
    labelPlacement: _labelPlacement,
    verticalAnchor: _verticalAnchor,
    disableInlineStyles,
    style,
    ...domProps
  } = props;

  const styles = disableInlineStyles
    ? {}
    : {
        ...style,
        // fontFamily: theme.typography.fontFamily,
        // fontSize: theme.typography.caption.fontSize ?? 12,
        // letterSpacing: "normal",
        // padding: theme.spacing(1),
        // fill: theme.palette.text.primary,
      };

  console.log("dom props: ", domProps);
  // @ts-ignore
  return (
    <text {...domProps} style={styles}>
      {domProps.text}
    </text>
  );
};

// angle: undefined
// data: (4) [{…}, {…}, {…}, {…}]
// datum: {_x: 2, _y: 16500, quarter: 2, earnings: 16500, label: 'Bravo'}
// disableInlineStyles: undefined
// dx: 0
// dy: -8
// height: 350
// horizontal: undefined
// id: "chart-bar-2-labels-1"
// index: 1
// labelPlacement: "vertical"
// polar: undefined
// scale: {x: ƒ, y: ƒ}
// style: {fontFamily: "'Helvetica Neue', 'Helvetica', sans-serif", fontSize: 12, letterSpacing: 'normal', padding: 8, fill: '#455A64', …}
// text: "Bravo"
// textAnchor: "middle"
// verticalAnchor: "end"
// width: 350
// x: 140
// y: 100.16084024494225
