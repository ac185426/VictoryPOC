import { Typography, useTheme } from '@mui/material';
import React, { Component } from 'react';
import { VictoryLabel } from 'victory';
import type { VictoryBarProps, VictoryBar } from 'victory';

export const CustomText = (props: any) => {
  const theme = useTheme();
  const {
    labelPlacement: _labelPlacement,
    verticalAnchor: _verticalAnchor,
    disableInlineStyles,
    ...domProps
  } = props;

  return <text {...domProps}>{domProps.text}</text>;
};
