import { FC, PropsWithChildren, ReactNode } from 'react';
import { Box, Tooltip } from '@mui/material';
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
  <Tooltip placement="right" title={children}>
    <Link className="rounded-[5px]" href={to}>
      <Box
        className={`rounded-[10px] ${
          selected ? 'bg-lightsalmon text-white' : 'bg-white text-lightsalmon'
        } flex flex-row items-center p-2`}
        sx={{ boxShadow: 1 }}
      >
        {icon}
      </Box>
    </Link>
  </Tooltip>
);
