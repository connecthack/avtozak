import { Navbar } from './Navbar';

import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type PageProps = {
  title: string;
};
export const Page: FC<PropsWithChildren<PageProps>> = ({ children }) => {
  return (
    <Box display="flex" gap={2} height="100vh" px={2} py={4} width="100%">
      <Navbar />
      <Box flex={1}>{children}</Box>
    </Box>
  );
};
