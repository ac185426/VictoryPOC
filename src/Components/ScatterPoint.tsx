import React, { useState } from 'react';

export const ScatterPoint = ({ x, y, datum }: any) => {
  const [selected, setSelected] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  return (
    <circle
      cx={x}
      cy={y}
      r={20}
      stroke={hovered ? '#682392' : 'black'}
      strokeWidth={2}
      fill={selected ? 'lightgray' : '#B56CEB'}
      onClick={() => setSelected(!selected)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
    />
  );
};
