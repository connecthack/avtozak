import { Chip as MUIChip, ChipProps as MUIChipProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type ChipProps = Pick<MUIChipProps, 'color' | 'size'>;
export const Chip: FC<PropsWithChildren<ChipProps>> = ({
  children,
  size = 'small',
  color = 'secondary',
}) => {
  return (
    <MUIChip
      className="p-4 rounded-[8px]"
      color={color}
      label={children}
      size={size}
    />
  );
};
