'use client';

import { usePrisoners } from '@/app/apollo/hooks/usePrisoners';
import { CardPZ } from '@/app/components/Card';

import { Grid2, Typography } from '@mui/material';

const DEFAULT_OFFSET = 300;

export const PrisonersList = () => {
  const { data: prisoners, loading } = usePrisoners(DEFAULT_OFFSET);

  if (loading) return <Typography>Загрузка...</Typography>;

  return (
    <>
      {prisoners?.map(({ node: prisoner }) => (
        <Grid2 display="flex" key={prisoner.id} size={6}>
          <CardPZ
            articles={prisoner.articles}
            birthdate={prisoner.date_of_birth}
            id={prisoner.id}
            location={prisoner.region}
            name={prisoner.name}
          />
        </Grid2>
      ))}
    </>
  );
};
