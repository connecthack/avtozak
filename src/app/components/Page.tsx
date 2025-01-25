import { Navbar } from './Navbar';

import Image from 'next/image';
import { Grid2 } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-screen px-4 py-8">
      <Grid2 className="h-full" display="flex" spacing={2} container>
        <Grid2
          className="h-full"
          display="flex"
          flexDirection="column"
          gap="115px"
          px={4}
          size={3}
        >
          <Image
            alt="image"
            className="w-full"
            height={126}
            quality={100}
            src="/logo.png"
            width={540}
          />
          <Navbar />
        </Grid2>
        <Grid2 className="h-full" size={9}>
          {children}
        </Grid2>
      </Grid2>
    </div>
  );
};
