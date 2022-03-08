const data2 = () => {
  const percent = 70;

  const dataGauge = [
    { x: 1, y: percent }, //purple
    { x: 5, y: 100 - percent }, //white
  ];
  return { dataGauge, percent };
};

export default data2;
