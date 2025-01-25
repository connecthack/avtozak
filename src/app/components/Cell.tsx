import { FC, PropsWithChildren, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

type CellProps = {
  icon: ReactNode;
  to: string;
  selected?: boolean;
};
export const Cell: FC<PropsWithChildren<CellProps>> = ({
  children,
  icon,
  to,
  selected = false,
}) => (
  <Link className="rounded-[5px]" href={to}>
    <Box
      className={`rounded-lg ${
        selected ? 'bg-white' : 'bg-none'
      } flex flex-row items-center justify-start p-2 gap-4`}
      sx={{ boxShadow: selected ? 1 : 0 }}
    >
      <Box
        className={`rounded-[10px] ${
          selected ? 'bg-lightsalmon text-white' : 'bg-white text-lightsalmon'
        } flex flex-row items-center p-2`}
        sx={{ boxShadow: selected ? 0 : 1 }}
      >
        {icon}
      </Box>
      <div>
        <Typography fontWeight={600} variant="subtitle1">
          {children}
        </Typography>
      </div>
    </Box>
  </Link>
);
