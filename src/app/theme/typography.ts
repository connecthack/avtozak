import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Poppins } from 'next/font/google';

const roboto = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const typography: TypographyOptions = {
  fontFamily: roboto.style.fontFamily,
  h1: {
    fontSize: 34,
  },
  h2: {
    fontSize: 28,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    fontSize: 20,
  },
  h5: {
    fontSize: 19,
  },
  body1: {
    fontSize: 17,
  },
  subtitle1: {
    fontSize: 16,
  },
  subtitle2: {
    fontSize: 15,
  },
  caption: {
    fontSize: 13,
  },
  // caption2: {
  //   fontSize: 10,
  // },

  button: {
    fontSize: 16,
    lineHeight: '22.4px',
    textTransform: 'none',
  },
};
