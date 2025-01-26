import { Navbar } from './Navbar';

import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type PageProps = {
  title: string;
};
export const Page: FC<PropsWithChildren<PageProps>> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column-reverse', md: 'row' }}
      gap={2}
      height={{ xs: 'auto', md: '100vh' }}
      px={2}
      py={4}
      width="100%"
    >
      <Navbar />
      <Box display="flex" flex={1} flexDirection="column">
        {children}
      </Box>
    </Box>
  );
};
