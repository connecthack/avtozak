'use client';

import { AutorenewIcon } from '@/app/components/AutorenewIcon';
import { CoatIcon } from '@/app/components/CoatIcon';
import { CoatRenewIcon } from '@/app/components/CoatRenewIcon';
import { HammerIcon } from '@/app/components/HammerIcon';
import { Cell } from '@/app/components/Cell';

import { Box } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <Box
      bottom={0}
      className="bg-whitesmoke"
      display="flex"
      flexDirection={{ xs: 'row', md: 'column' }}
      justifyContent={{ xs: 'space-around', md: 'space-between' }}
      left={0}
      padding={{ xs: 2, md: 0 }}
      position={{ xs: 'fixed', md: 'relative' }}
      width={{ xs: '100%', md: 'auto' }}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection={{ xs: 'row', md: 'column' }}
        gap="20px"
      >
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
        className="object-contain"
        height={39}
        quality={100}
        src="/logo.png"
        width={36}
      />
    </Box>
  );
};
