import Link from 'next/link';
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
      <Cell to="/" icon={<AutorenewIcon />} selected={currentPath === '/'}>
        Все обновления
      </Cell>
      <Cell to="/rfm" icon={<CoatIcon />} selected={currentPath === '/rfm'}>
        Предположение РФМ
      </Cell>
      <Cell
        to="/updates"
        icon={<CoatRenewIcon />}
        selected={currentPath === '/updates'}
      >
        Обновление РФМ
      </Cell>
      <Cell
        to="/court-update"
        icon={<HammerIcon />}
        selected={currentPath === '/court-update'}
      >
        Обновление суды
      </Cell>
    </div>
  );
};
