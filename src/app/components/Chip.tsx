import { Chip as MUIChip, ChipProps as MUIChipProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type ChipProps = {} & Pick<MUIChipProps, 'color'>;
export const Chip: FC<PropsWithChildren<ChipProps>> = ({
  children,
  color = 'secondary',
}) => {
  return (
    <MUIChip className="p-4 rounded-[8px]" label={children} color={color} />
  );
};
