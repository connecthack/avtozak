import { palette } from './palette';

export const getComponents = () => ({
  MuiChip: {
    styleOverrides: {
      colorPrimary: {
        backgroundColor: palette.common.palegoldenrod,
        color: palette.common.black,
      },
      colorSecondary: {
        backgroundColor: palette.common.palepurple,
        color: palette.common.black,
      },
      colorError: {
        backgroundColor: palette.common.palered,
        color: palette.common.black,
      },
    },
  },
});
