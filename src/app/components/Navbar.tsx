'use client';

import { AutorenewIcon } from './AutorenewIcon';
import { Cell } from './Cell';
import { CoatIcon } from './CoatIcon';
import { CoatRenewIcon } from './CoatRenewIcon';
import { HammerIcon } from './HammerIcon';

import { Box } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <Box alignItems="center" display="flex" flexDirection="column" gap="20px">
        <Cell icon={<AutorenewIcon />} selected={currentPath === '/'} to="/">
          Все обновления
        </Cell>
        <Cell
          icon={<CoatIcon />}
          selected={currentPath === '/suggestions'}
          to="/suggestions"
        >
          Предположение РФМ
        </Cell>
        <Cell
          icon={<CoatRenewIcon />}
          selected={currentPath === '/updates'}
          to="/updates"
        >
          Обновление РФМ
        </Cell>
        <Cell
          icon={<HammerIcon />}
          selected={currentPath === '/courts'}
          to="/courts"
        >
          Обновление суды
        </Cell>
      </Box>

      <Image
        alt="image"
        height={39}
        objectFit="contain"
        quality={100}
        src="/logo.png"
        width={36}
      />
    </Box>
  );
};
