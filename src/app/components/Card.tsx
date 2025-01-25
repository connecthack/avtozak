import { FC, ReactNode } from 'react';
import { Chip } from './Chip';
import { Typography } from '@mui/material';

type CardPZProps = {
  name?: string | null;
  birthdate?: string | null;
  birthplace?: string | null;
  articles?: (null | string)[] | null;
  status?: string | null;
};

export const CardPZ: FC<CardPZProps> = ({
  name,
  birthdate,
  birthplace,
  articles,
}) => (
  <div className="rounded-2xl w-full bg-whitesmoke flex flex-col p-8 gap-4 text-slategray">
    <Typography variant="body1" fontWeight={600}>
      {name}
    </Typography>
    <div className="text-lightsteelblue">
      <div>
        <Typography display="inline" variant="caption">
          Дата рождения:{' '}
        </Typography>
        <Typography display="inline" fontWeight={600} variant="caption">
          {birthdate}
        </Typography>
      </div>
      <div>
        <Typography display="inline" variant="caption">
          Место рождения:{' '}
        </Typography>
        <Typography display="inline" fontWeight={600} variant="caption">
          {birthplace}
        </Typography>
      </div>
    </div>
    <div className="flex flex-wrap gap-1">
      {articles?.map((article, index) => (
        <Chip key={index}>{article}</Chip>
      ))}
    </div>
  </div>
);
