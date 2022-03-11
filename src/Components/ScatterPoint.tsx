import React, { useState } from 'react';

export const ScatterPoint = ({ x, y, datum }: any) => {
  const [selected, setSelected] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  return (
    <circle
      cx={x}
      cy={y}
      r={datum.x * datum.y}
      stroke={hovered ? 'purple' : 'white'}
      strokeWidth={2}
      fill={selected ? 'cyan' : 'gray'}
      onClick={() => setSelected(!selected)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};
