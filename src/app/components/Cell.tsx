import { FC, PropsWithChildren, ReactNode } from 'react';
import { AutorenewIcon } from './AutorenewIcon';
import { Box, Typography } from '@mui/material';

type CellProps = {
  icon: ReactNode;
  selected?: boolean;
};
export const Cell: FC<PropsWithChildren<CellProps>> = ({
  children,
  icon,
  selected = false,
}) => (
  <div className="rounded-[5px]">
    <Box
      sx={{ boxShadow: selected ? 1 : 0 }}
      className={`rounded-lg ${
        selected ? 'bg-white' : 'bg-none'
      } flex flex-row items-center justify-start p-2 gap-4`}
    >
      <Box
        sx={{ boxShadow: selected ? 0 : 1 }}
        className={`rounded-[10px] ${
          selected ? 'bg-lightsalmon text-white' : 'bg-white text-lightsalmon'
        } flex flex-row items-center p-2`}
      >
        {icon}
      </Box>
      <div>
        <Typography variant="subtitle1" fontWeight={600}>
          {children}
        </Typography>
      </div>
    </Box>
  </div>
);
