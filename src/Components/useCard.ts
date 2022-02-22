import lightTheme from '../Themes/lightTheme';
import darkTheme from '../Themes/darkTheme';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

const useCard = () => {
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

  const [chartTheme, setChartTheme] = useState(lightTheme);
  const [lob, setLob] = useState('Light');
  const [background, setBackground] = useState('#ffffff');

  const themeHandler = () => {
    if (chartTheme === lightTheme) {
      setChartTheme(darkTheme);
      setLob('Dark');
      setBackground('#2C2C2E');
    } else {
      setChartTheme(lightTheme);
      setLob('Light');
      setBackground('#ffffff');
    }
  };

  return {
    chartTheme,
    lob,
    background,
    themeHandler,
    LightStyles,
    DarkStyles,
  };
};

export default useCard;
