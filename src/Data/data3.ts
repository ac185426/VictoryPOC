export const data3 = () => {
  const percent = 70;

  const dataGauge = [
    { y: percent }, //purple
    { y: 100 - percent }, //gray
  ];

  return { percent, dataGauge };
};
