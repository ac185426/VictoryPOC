import lightTheme from '../Themes/lightTheme';
import darkTheme from '../Themes/darkTheme';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

const useCard = () => {
  const [chartTheme, setChartTheme] = useState(lightTheme);
  const [lob, setLob] = useState('Light');
  const [background, setBackground] = useState('#ffffff');
  const [textTheme, setTextTheme] = useState('black');
  const [subTextTheme, setSubTextTheme] = useState('black');
  const LightStyles = styled(Button)<ButtonProps>(() => ({
    '&.MuiButton-root': {
      border: '1px solid rgba(73, 22, 104, 1)',
    },
    '&.MuiButton-text': {
      color: '#491668',
    },
    '&.MuiButton-outlined': {
      color: '#491668',
    },
  }));

  const DarkStyles = styled(Button)<ButtonProps>(() => ({
    '&.MuiButton-root': {
      border: '1px solid rgba(181, 108, 235, 1)',
    },
    '&.MuiButton-text': {
      color: '#B56CEB',
    },
    '&.MuiButton-outlined': {
      color: '#B56CEB',
    },
  }));

  const themeHandler = () => {
    if (chartTheme === lightTheme) {
      setChartTheme(darkTheme);
      console.log('Dark Theme config: ', darkTheme);
      setLob('Dark');
      setBackground('#2C2C2E');
      setTextTheme('white');
      setSubTextTheme('rgba(255, 255, 255, 0.5)');
      return 'dark';
    } else {
      setChartTheme(lightTheme);
      console.log('Light Theme config: ', lightTheme);
      setLob('Light');
      setBackground('#ffffff');
      setTextTheme('black');
      setSubTextTheme('black');

      return 'light';
    }
  };

  return {
    chartTheme,
    lob,
    background,
    themeHandler,
    LightStyles,
    DarkStyles,
    textTheme,
    subTextTheme,
  };
};

export default useCard;
