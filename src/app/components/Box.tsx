'use client';

import { Box as MUIBox, BoxProps as MUIBoxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type BoxProps = {
  fullHeight?: boolean;
} & MUIBoxProps;
export const Box: FC<PropsWithChildren<BoxProps>> = ({
  children,
  fullHeight,
  ...rest
}) => {
  const classes = `rounded-2xl bg-white flex flex-col p-4 w-full ${fullHeight ? 'h-full' : ''}`;

  return (
    <MUIBox className={classes} sx={{ boxShadow: 1 }} {...rest}>
      {children}
    </MUIBox>
  );
};
