import { AutorenewIcon } from './AutorenewIcon';
import { Cell } from './Cell';
import { CoatIcon } from './CoatIcon';
import { CoatRenewIcon } from './CoatRenewIcon';
import { HammerIcon } from './HammerIcon';

export const Navbar = () => (
  <div className="flex flex-col gap-[20px] items-stretch">
    <Cell icon={<AutorenewIcon />} selected={true}>
      Все обновления
    </Cell>
    <Cell icon={<CoatIcon />}>Предположение РФМ</Cell>
    <Cell icon={<CoatRenewIcon />}>Обновление РФМ</Cell>
    <Cell icon={<HammerIcon />}>Обновление суды</Cell>
  </div>
);
