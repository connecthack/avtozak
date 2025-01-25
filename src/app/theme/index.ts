import { getComponents } from './components';
import { palette } from './palette';
import { typography } from './typography';

import { createTheme, Shadows } from '@mui/material/styles';

const theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  shadows: [
    'none',
    '0px 1px 18px 0px rgba(0, 0, 0, 0.06)',
    ...Array(23).fill('none'),
  ] as Shadows,
});

theme.components = getComponents();

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('xl')]: {
    fontSize: 40,
  },
};

export { theme };
