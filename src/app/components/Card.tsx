import { Chip } from './Chip';

import { FC } from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

type CardPZProps = {
  id: string;
  name?: string | null;
  birthdate?: string | null;
  location?: string | null;
  articles?: (null | string)[] | null;
  status?: string | null;
};

export const CardPZ: FC<CardPZProps> = ({
  id,
  name,
  birthdate,
  location,
  articles,
}) => (
  <div className="rounded-2xl w-full bg-whitesmoke hover:bg-grey flex flex-col p-8 gap-4 text-slategray">
    <Link href={`/prisoner/${id}`}>
      <Typography fontWeight={600} variant="body1">
        {name}
      </Typography>
      <div className="text-lightsteelblue">
        {birthdate && (
          <div>
            <Typography display="inline" variant="caption">
              Дата рождения:{' '}
            </Typography>
            <Typography display="inline" fontWeight={600} variant="caption">
              {birthdate}
            </Typography>
          </div>
        )}
        {location && (
          <div>
            <Typography display="inline" variant="caption">
              Регион :{' '}
            </Typography>
            <Typography display="inline" fontWeight={600} variant="caption">
              {location}
            </Typography>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-1">
        {articles?.map((article, index) => <Chip key={index}>{article}</Chip>)}
      </div>
    </Link>
  </div>
);
