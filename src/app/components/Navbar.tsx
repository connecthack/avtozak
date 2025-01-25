'use client';

import { AutorenewIcon } from './AutorenewIcon';
import { Cell } from './Cell';
import { CoatIcon } from './CoatIcon';
import { CoatRenewIcon } from './CoatRenewIcon';
import { HammerIcon } from './HammerIcon';

import { usePathname } from 'next/navigation';
export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col gap-[20px] items-stretch">
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
    </div>
  );
};
