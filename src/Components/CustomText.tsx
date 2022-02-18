import { Typography } from '@mui/material';
import React from 'react';

class Text extends React.Component {
  render() {
    const { direction, dx, x, y, id, textAnchor }: any = this.props;

    return (
      <g role="presentation">
        <text direction={direction} dx={dx} x={x} y={y} id={id} textAnchor={textAnchor}>
          <Typography sx={{ color: 'red' }} />
        </text>
      </g>
    );
  }
}

export default Text;
