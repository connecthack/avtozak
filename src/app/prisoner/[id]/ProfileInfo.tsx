import { Prisoner } from '@/app/apollo/hooks/usePrisoners';
import { Box } from '@/app/components/Box';
import { Chip } from '@/app/components/Chip';

import { Typography } from '@mui/material';
import { FC } from 'react';

type ProfileInfoProps = {
  prisoner: Prisoner;
};
export const ProfileInfo: FC<ProfileInfoProps> = async ({ prisoner }) => {
  return (
    <Box display="flex" gap={2} fullHeight scrollable>
      <Typography fontWeight={600} variant="h5">
        Информация
      </Typography>
      <div className="text-lightsteelblue">
        <div>
          <Typography display="inline" variant="caption">
            {prisoner.description}
          </Typography>
        </div>
        <hr className="my-4" />
        <div>
          <Typography display="inline" variant="caption">
            ФИО:{' '}
          </Typography>
          <Typography display="inline" fontWeight={600} variant="caption">
            {prisoner.name}
          </Typography>
        </div>
        {prisoner.date_of_birth && (
          <div>
            <Typography display="inline" variant="caption">
              Дата рождения:{' '}
            </Typography>
            <Typography display="inline" fontWeight={600} variant="caption">
              {prisoner.date_of_birth}
            </Typography>
          </div>
        )}
        {prisoner.region && (
          <div>
            <Typography display="inline" variant="caption">
              Регион :{' '}
            </Typography>
            <Typography display="inline" fontWeight={600} variant="caption">
              {prisoner.region}
            </Typography>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-1">
        {prisoner.articles?.map((article, index) => (
          <Chip key={index}>{article}</Chip>
        ))}
      </div>
    </Box>
  );
};
