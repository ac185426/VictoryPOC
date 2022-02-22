import lightTheme from '../Themes/lightTheme';
import darkTheme from '../Themes/darkTheme';
import { useState } from 'react';

const useCard = () => {
  const lightStyles = {
    '&.MuiButton-root': {
      border: '#491668',
    },
    '&.MuiButton-text': {
      color: '#491668',
    },
    '&.MuiButton-outlined': {
      color: '#491668',
    },
  };

  const darkStyles = {
    '&.MuiButton-root': {
      border: '#B56CEB',
    },
    '&.MuiButton-text': {
      color: '#B56CEB',
    },
    '&.MuiButton-outlined': {
      color: '#B56CEB',
    },
  };

  const [chartTheme, setChartTheme] = useState(lightTheme);
  const [lob, setLob] = useState('Light');
  const [background, setBackground] = useState('#ffffff');
  const [cardTheme, setCardTheme] = useState(lightStyles);

  const themeHandler = () => {
    if (chartTheme === lightTheme) {
      setChartTheme(darkTheme);
      setLob('Dark');
      setBackground('#2C2C2E');
      setCardTheme(darkStyles);
    } else {
      setChartTheme(lightTheme);
      setLob('Light');
      setBackground('#ffffff');
      setCardTheme(lightStyles);
    }
  };

  return {
    chartTheme,
    lob,
    background,
    cardTheme,
    themeHandler,
  };
};

export default useCard;
