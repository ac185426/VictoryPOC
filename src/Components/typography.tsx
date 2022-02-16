import { Typography } from '@mui/material';
import React from 'react';

class Text extends React.Component {
  render() {
    const { direction, dx, x, y, id }: any = this.props;

    return (
      <g role="presentation">
        <text direction={direction} dx={dx} x={x} y={y} id={id}>
          <Typography sx={{ color: 'red' }} />
        </text>
      </g>
    );
  }
  //need the label props for the variable
}

export default Text;
