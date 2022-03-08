const data2 = () => {
  const percent = 70;

  const dataGauge = [
    { y: percent }, //purple
    { y: 100 - percent }, //gray
  ];

  const backgroundData = [{ y: 100 }];
  return { dataGauge, percent, backgroundData };
};

export default data2;
