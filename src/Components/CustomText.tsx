import { useTheme } from '@mui/material';

export const CustomText = (props: any) => {
  const theme = useTheme();
  const {
    labelPlacement: _labelPlacement,
    verticalAnchor: _verticalAnchor,
    disableInlineStyles,
    ...domProps
  } = props;

  return <text {...domProps}>{domProps.text}</text>;
};
