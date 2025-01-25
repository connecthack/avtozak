import Image from 'next/image';
import { Navbar } from './Navbar';
import { Grid2 } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-whitesmoke px-4 py-8">
      <Grid2 display="flex" spacing={2} container>
        <Grid2
          size={3}
          display="flex"
          flexDirection="column"
          gap="115px"
          px={4}
        >
          <Image
            alt="image"
            src="/logo.png"
            width={540}
            height={126}
            className="w-full"
            quality={100}
          />
          <Navbar />
        </Grid2>
        {children}
      </Grid2>
    </div>
  );
};
