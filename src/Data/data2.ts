export const data2 = () => {
  const percent = 30;

  const dataGauge = [
    { y: percent }, //purple
    { y: 100 - percent }, //gray
  ];

  return { percent, dataGauge };
};
